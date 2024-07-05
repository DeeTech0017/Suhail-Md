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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169907565";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_46_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmVHa1VtQUFaK1hzczd5cjVneGxPTiszS0lSYnRVaitQYmNVNTM1YnpwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY5OTA3NTY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QjNDRkVDQUREMTQyMjZFRDZDMTJBMzQxQzlDRUJFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxOTQ0MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY09IZ01Ja2FSdWVGYm1EbFZITVhpUVwiLFxuICBcInBob25lSWRcIjogXCJiNDFmMDI1MS1kMWQ0LTQ2ODktOTQ0OS0yYWI3ZjRlM2JmYzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAyMzQsXG4gICAgICAyMDEsXG4gICAgICAxNDYsXG4gICAgICAxNTQsXG4gICAgICAxMTUsXG4gICAgICAyMTMsXG4gICAgICA2MyxcbiAgICAgIDcsXG4gICAgICA3MixcbiAgICAgIDEwNSxcbiAgICAgIDgsXG4gICAgICA1NSxcbiAgICAgIDgsXG4gICAgICA1MSxcbiAgICAgIDQ4LFxuICAgICAgMjIyLFxuICAgICAgMjE4LFxuICAgICAgMTEzLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgNTEsXG4gICAgICA4NixcbiAgICAgIDIwMyxcbiAgICAgIDExNixcbiAgICAgIDE3NSxcbiAgICAgIDE2NSxcbiAgICAgIDE2NSxcbiAgICAgIDE3MyxcbiAgICAgIDE0LFxuICAgICAgMTc1LFxuICAgICAgMTM3LFxuICAgICAgNTAsXG4gICAgICAzNSxcbiAgICAgIDE0OSxcbiAgICAgIDQyLFxuICAgICAgMTg2LFxuICAgICAgMjE1LFxuICAgICAgMTg0LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNktTQUtMS0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk5MDc1NjU6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSQVNIRk9SRFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NDkzNjc2Mjc3OTE2OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppdHVQSUJFTmVxb0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGtNdDFpdHIzWS9iYjhBaEo1THNtdHVESXhhUkpBTEFKWVF0OENUNlBERT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyQ3B5eVNVMUhqWURpUG9uWDByUG05QUE5eTIyYWErV29OYlAyY0RZUEpjcDV5RWs2eFZMTElBQ1htYjFWQU1HRzhEeStLNkZRajh4LzFLZWFXUVRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3LzdYNFloNWE2SXdzbGhTOVIwelc1UXp6ZWx1MmNhSDdacW9wQnJPUzc5SFdwMDNJdUY5cTl6WVJmS2wvNndOMTZDWGw2VDhIZGtudmhoN0YyMHBpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5OTA3NTY1OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTk0Mzk2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
