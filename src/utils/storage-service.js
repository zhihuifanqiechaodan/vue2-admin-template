// 封装localStorage || sessionStorage || js-cookie
const LocalStorage = window.localStorage
const SessionStorage = window.sessionStorage
import Cookie from 'js-cookie'

// LocalStorage
const setLocalItem = (key, data) => LocalStorage.setItem(key, data)

const getLocalItem = (key) => LocalStorage.getItem(key)

const removeLocalItem = (key) => LocalStorage.removeItem(key)

const clearLocal = () => LocalStorage.clear()

// SessionStorage
const setSessionItem = (key, data) => SessionStorage.setItem(key, data)

const getSessionItem = (key) => SessionStorage.getItem(key)

const removeSessionItem = (key) => SessionStorage.removeItem(key)

const clearSession = () => SessionStorage.clear()

// Cookies
const setCookieItem = (key, data) => Cookie.set(key, data)

const getCookieItem = (key) => Cookie.get(key)

const removeCookie = (key) => Cookie.remove(key)


export {
    setLocalItem,
    getLocalItem,
    clearLocal,
    removeLocalItem,
    setSessionItem,
    getSessionItem,
    removeSessionItem,
    clearSession,
    setCookieItem,
    getCookieItem,
    removeCookie
}