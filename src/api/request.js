import {service} from '@/api/index'

export const getHello = () => {
    return service
        .get('/index/hello')
        .then(res => res)
}

export const putHelloAndHeaders = (params, data, header) => {
    return service
        .request({
            url: params,
            method: 'put',
            data: data,
            headers: {
                'HEADER': header
            }
        })
        .then(res => res)
}