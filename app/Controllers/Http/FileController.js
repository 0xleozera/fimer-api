'use strict';

const File = use('App/Models/File')
const Drive = use('Drive')

class FileController {
  async show ({ params, response }) {
    try {
      const file = await File.findOrFail(params.id)

      response.implicitEnd = false
      response.header('Content-Type', file.content_type)

      const stream = await Drive.getStream(file.key)

      stream.pipe(response.response)
    } catch (err) {
      return response.status(err.status).json({
        error: {
          message: 'Arquivo não existe!',
          err_message: err.message
        }
      })
    }
  }

  async store ({ request, response }) {
    await request.multipart
      .file('file', { size: '2mb' }, async file => {
        try {
          const ContentType = file.headers['content-type']
          const ACL = 'public-read';
          const Key = `${Date.now()}.${file.clientName}`

          const url = await Drive.put(Key, file.stream, {
            ContentType,
            ACL
          })

          const currentFile = await File.create({
            name: file.clientName,
            key: Key,
            url,
            content_type: ContentType
          })

          return currentFile
        } catch (err) {
          return response.status(err.status).json({
            error: {
              message: 'Não foi possível enviar o arquivo!',
              err_message: err.message
            }
          })
        }
      })
      .process()
  }
}

module.exports = FileController
