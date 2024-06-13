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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_49_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUxSY3U3M2hXcEtuUi9kNHNjK1JEMllrN2lqL29BSytWQlJHSlhweVg0az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTUwUHdHc0dReHlkTmNjNDdCVnM2QVwiLFxuICBcInBob25lSWRcIjogXCJlZDlkZmUwNS1lZTkzLTRlYzUtYmQ1NS1kNDVhNzIzZjY3YjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAxMzMsXG4gICAgICAxNjIsXG4gICAgICAzNCxcbiAgICAgIDIwMyxcbiAgICAgIDE0NyxcbiAgICAgIDE2OSxcbiAgICAgIDcsXG4gICAgICA0NyxcbiAgICAgIDEyNCxcbiAgICAgIDEyNCxcbiAgICAgIDE5NCxcbiAgICAgIDE4OSxcbiAgICAgIDksXG4gICAgICAyNDIsXG4gICAgICAyNTUsXG4gICAgICA3MyxcbiAgICAgIDIwMSxcbiAgICAgIDE0MCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxMTMsXG4gICAgICA5MCxcbiAgICAgIDE2NyxcbiAgICAgIDEwNCxcbiAgICAgIDI3LFxuICAgICAgMTQ1LFxuICAgICAgMjAzLFxuICAgICAgMTUzLFxuICAgICAgMTc4LFxuICAgICAgMjUzLFxuICAgICAgMTA3LFxuICAgICAgMjUyLFxuICAgICAgMjE0LFxuICAgICAgMjAzLFxuICAgICAgMjMzLFxuICAgICAgMTI0LFxuICAgICAgMTE5LFxuICAgICAgMTczLFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxHTE1BNjFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDkwNjg3NTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItin2KjZhiDYs9mI2KfYqtuMXCIsXG4gICAgXCJsaWRcIjogXCIzNzUzODA2NDUxOTE3OTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyRjY4SUdFT3lLcnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemRCbVhNZFNkdFdVOTNUZ2drSkdodWlBakpIT1pybmVOdTF5RVptTTZIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxSmdnRUhqWWZqc1diVmo0RWVRbTVvQmVKOFpYc2tuYXR5VmpHS2l3VXNubHhSajc4L2JlLzgvL0pvMEt3NG9rUHZVUnRzQUhjVjRFWWJMbWE3NjNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1SWpIcGxiek1MdGhaMktkZWxlTjhobkkydVUyTnQrMDRoaEh2MUhOVy9yQ21UblZVbkliaWs3MFJwVUZoZlc5UFlFRTBrc2lwbGdCazdKOFp5RjhDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDkwNjg3NTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODMyMjU0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
