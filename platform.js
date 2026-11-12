(function exposePlatform(global) {
  const Platform = {
    isElectron() {
      return Boolean(global.desktopAPI && global.desktopAPI.isDesktop);
    },

    isCapacitor() {
      return Boolean(global.Capacitor);
    },

    isWeb() {
      return !this.isElectron() && !this.isCapacitor();
    },

    isEmbedded() {
      try {
        return global.top !== global.self;
      } catch (error) {
        return true;
      }
    },

    getName() {
      if (this.isElectron()) return "electron";
      if (this.isCapacitor()) return "capacitor";
      return "web";
    },

    async init() {
      const platformName = this.getName();
      document.body.classList.add(`platform-${platformName}`);
      if (this.isEmbedded()) {
        document.body.classList.add("platform-embedded");
      }

      if (platformName === "capacitor") {
        await this.setupMobileEnvironment();
      }

      return platformName;
    },

    async setupMobileEnvironment() {
      const plugins = global.Capacitor && global.Capacitor.Plugins;
      if (!plugins) return;

      try {
        if (plugins.ScreenOrientation && plugins.ScreenOrientation.lock) {
          await plugins.ScreenOrientation.lock({ orientation: "landscape" });
        }
        if (plugins.StatusBar && plugins.StatusBar.hide) {
          await plugins.StatusBar.hide();
        }
      } catch (error) {
        console.warn("[Platform] Mobile plugins are unavailable:", error);
      }
    }
  };

  global.Platform = Platform;
  global.addEventListener("DOMContentLoaded", () => {
    Platform.init();
  }, { once: true });
})(window);
