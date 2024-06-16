const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923409068757";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_37_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxCdUZVN041VHdSVzZOMUNRUkt0dDN3RmNvcFFYSi92SVplVGk1UGRXV1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVIYlRrY3hGVEh5c3A2NER1Zjllc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmI1MjNiZWQtMjcwYi00OGNiLTgwMjctMDZiNmY1ZDBiMzgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE3LFxuICAgICAgMTYxLFxuICAgICAgMjEyLFxuICAgICAgMjA0LFxuICAgICAgMTY4LFxuICAgICAgMTc1LFxuICAgICAgMTM3LFxuICAgICAgNDEsXG4gICAgICAxMzcsXG4gICAgICA4MSxcbiAgICAgIDk2LFxuICAgICAgMTkzLFxuICAgICAgNjksXG4gICAgICAxMjksXG4gICAgICAyMixcbiAgICAgIDE2NSxcbiAgICAgIDI1MyxcbiAgICAgIDE1MixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxMTIsXG4gICAgICAyMSxcbiAgICAgIDIzMyxcbiAgICAgIDEwMCxcbiAgICAgIDIyMSxcbiAgICAgIDk4LFxuICAgICAgMTQ1LFxuICAgICAgMTM4LFxuICAgICAgMjAyLFxuICAgICAgMjIxLFxuICAgICAgMTI0LFxuICAgICAgODcsXG4gICAgICAxMDMsXG4gICAgICAyMDQsXG4gICAgICAxMzYsXG4gICAgICAyOSxcbiAgICAgIDg0LFxuICAgICAgMjMyLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0xR0hYTVNWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDkwNjg3NTc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYp9io2YYg2LPZiNin2KrbjFwiLFxuICAgIFwibGlkXCI6IFwiMzc1MzgwNjQ1MTkxNzk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdGNjhJR0VKQ1F1ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6ZEJtWE1kU2R0V1U5M1RnZ2tKR2h1aUFqSkhPWnJuZU51MXlFWm1NNkhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhBWVFKUjNpTFBmbTFNeDd2Qk14eFgyVVZpQ055ZnVKN2hSUUcvRkowVlA2L0Q1VE1lTzdXWGQ5M3ZDRGVGTjVaM3FKVGliOWhFUGRJR0h6WmxBcEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZMdVlnc0Z6cE90WHBuWERDNHIxNXV3MFN2bWhWaHB3RDA2QTd0cURZenpLczRsbzFIekpKc1FvQ3l4Tk1VcTBqT2pERjdpN2xkTW9CVEtrbjRiRURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwOTA2ODc1NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODUxOTgyOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
