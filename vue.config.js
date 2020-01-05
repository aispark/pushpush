module.exports = {
  "pwa": {
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "src/firebase-messaging-sw.js"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}