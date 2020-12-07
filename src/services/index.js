import ServiceFactory from './service-factory'

const getService = (serviceName) => ServiceFactory[serviceName]

export default getService