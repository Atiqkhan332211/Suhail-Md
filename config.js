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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923409068757";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhtTDljK2xoNzJMM1dkb28rZUFVWW5kRVplTWx1dGVGdGVXbkFPMDM3NnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZVbVZ5SE5zUzlxaWEzckhJRlpIWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzA0ZWRkOWMtMGU2MC00MjZiLWJlMjItYmE1ZGMwYzgwY2RiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDU0LFxuICAgICAgMjA3LFxuICAgICAgMjgsXG4gICAgICAxNyxcbiAgICAgIDIwMCxcbiAgICAgIDEyMyxcbiAgICAgIDk3LFxuICAgICAgMjQ3LFxuICAgICAgMTc3LFxuICAgICAgODcsXG4gICAgICAyLFxuICAgICAgMzAsXG4gICAgICAxNjMsXG4gICAgICAyMjcsXG4gICAgICAxMTEsXG4gICAgICA0OCxcbiAgICAgIDIyLFxuICAgICAgMjAwLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA3NyxcbiAgICAgIDI0NCxcbiAgICAgIDEwOSxcbiAgICAgIDE1MyxcbiAgICAgIDIwMCxcbiAgICAgIDEzOCxcbiAgICAgIDIzLFxuICAgICAgMjE4LFxuICAgICAgMTQ3LFxuICAgICAgMjI3LFxuICAgICAgMjMwLFxuICAgICAgMTEzLFxuICAgICAgMTU5LFxuICAgICAgNDQsXG4gICAgICA5MCxcbiAgICAgIDIwNyxcbiAgICAgIDE0MyxcbiAgICAgIDkxLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpOSlYxM1lYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDkwNjg3NTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItin2KjZhiDYs9mI2KfYqtuMXCIsXG4gICAgXCJsaWRcIjogXCIzNzUzODA2NDUxOTE3OTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luRjY4SUdFTkxNcTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemRCbVhNZFNkdFdVOTNUZ2drSkdodWlBakpIT1pybmVOdTF5RVptTTZIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4UjhJS2tZNGFUem52YWMvRU85N1ZXNnp3YUM4Ly8vVmh6d3oveUJHUnJ6QUlBOG1zR1dDN1BLQ2xNbWV2R1NuZmtkUCtDclBQTmpWUG5rcGFsZGpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJOHFkZFgzeHdvaWtLZnFubnZtc2dET1RaM1Uwa2FENmIvQzdkMFZOOC9kTm41T0ptWkhCV2tBUTVGbGRJQTlZdWxJc3ZNU3dZTkVEdGpGVDRzbHhoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDkwNjg3NTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI4MTgxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdCZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0JlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS0gvUGU0R2lZb2RoemR4Z0xtTk84Yzk5ODNlaXJFR1ZEaU1Ka3lBdTQ5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUwNzg2Njk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
