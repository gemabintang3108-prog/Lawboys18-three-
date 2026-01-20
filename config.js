module.exports = {
    // --- TELEGRAM SETTINGS ---
    botToken: "7846842294:AAHrj-4I_EIsMVIOM5J3mwnmkc8lgrSpQVI",
    ownerId: 7852481149,
    ownerName: "Tangsky",
    ownerWa: "62895326859614",
    ownerUser: "@TangskyBoys",
    botName: "Lawboys Auto Order V1",
    startPhoto: "https://files.catbox.moe/gxhems.jpg",
    startAudio: "https://files.catbox.moe/a0tm5w.mp3",
    startAudioCaption: "Welcome To Lawboys Auto Order V1!!",
    testimoniChannel: "@informasi_tangsky",
    
    // --- Nokos Setting ( Rumah Otp )
    RUMAHOTP: "otp_iAFQitfRuRYRuKf",
    UNTUNG_NOKOS: 500,
    UNTUNG_DEPOSIT: 500,
    ppthumb: "https://files.catbox.moe/fdm5e5.jpg",

    // --- PAYMENT ORKUT ---
    payment: {
        apikey: "ubot",
        username: "tokofaa",
        token: "2420562:SUVDf2e9Cv5Ao4MFyin1HGcqPwJasL"
    },

    // --- PAYMENT ATLANTIC ---
    ApikeyAtlantic: "ap1HhR2fPeQ88lvgPKrsfitABVlERz7V0RKVEmTA6PUlNoluso7JBtaVHkfeCtyzksQmz7t4wRNbenBfXlNZiPYbllkX5fEA",
    wd_balance: {
        bank_code: "DANA", // DANA, BCA, BRI, dll
        destination_number: "08xxxxx",
        destination_name: "Username Payment lu",
    },
    
    // --- Qris Manual Setting ---
    manualQrisPhoto: "https://files.catbox.moe/s1fzfh.jpg",
    
    // --- Vps Setting ---
    ApiDO1: "digitalocean_api_key_lu", // ganti api do lu
    hargaVPS: {
       low: {
        "2c2": 20000,
        "4c2": 35000,
        "8c4": 60000,
        "16c4": 90000,
        "16c8": 120000
      },
       medium: {
        "2c2": 25000,
        "4c2": 40000,
        "8c4": 65000,
        "16c4": 95000,
        "16c8": 125000
      },
       high: {
        "2c2": 50000,
        "4c2": 75000,
        "8c4": 100000,
        "16c4": 130000,
        "16c8": 150000
    }
  },
    // --- Fix Error Setting
    USER_LIMIT: 3,
    GEMINI_API_KEY: "AIzaSyB47adRUMkO-Yn_MOcOZBDV0PFIpzqKBy4",
    
    // --- PTERODACTYL PANEL ---
    panel: {
        domain: "https://kayyprivate.hostingvvip.my.id",
        apikey: "ptla_qczyKxi0FIT7NtH919ACLHUaTRfbhdyazpMmJcxbrA4",
        nestId: 5,
        eggId: 15,
        locationId: 1,
        startup: "npm start",
        image: "ghcr.io/parkervcp/yolks:nodejs_18"
    },

    // --- HARGA PANEL ---
    hargaPanel: {
        unlimited: 2000,
        perGB: 750,  
    }
};