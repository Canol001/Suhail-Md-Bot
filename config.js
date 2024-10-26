const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_45_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5WTjVEYnJtdkIyRHZDMmlDQWx5bnd3bmtWQjV6WW1lNjNUQ3NsTUY3OVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJ0ejBTWXRGUk9DaENvX1ctaHNIaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmY5YmY3MTktN2ViYy00NzRhLThlYjYtYjFkYWI1YmM5NDc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDM0LFxuICAgICAgMjM1LFxuICAgICAgMjQxLFxuICAgICAgOTgsXG4gICAgICA4NyxcbiAgICAgIDE5MixcbiAgICAgIDEwNyxcbiAgICAgIDE3OSxcbiAgICAgIDEyNixcbiAgICAgIDEyMSxcbiAgICAgIDE4LFxuICAgICAgNjEsXG4gICAgICAyMTMsXG4gICAgICAyNyxcbiAgICAgIDIyOSxcbiAgICAgIDE4MCxcbiAgICAgIDIxMCxcbiAgICAgIDEzOCxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTcxLFxuICAgICAgMCxcbiAgICAgIDc2LFxuICAgICAgMjI1LFxuICAgICAgMjM3LFxuICAgICAgNjYsXG4gICAgICA4OSxcbiAgICAgIDE3MyxcbiAgICAgIDIyLFxuICAgICAgNTUsXG4gICAgICAyNDMsXG4gICAgICAyOCxcbiAgICAgIDE3NCxcbiAgICAgIDYsXG4gICAgICAyMTEsXG4gICAgICAxOCxcbiAgICAgIDk5LFxuICAgICAgMTUxLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEgxMXVzQkVKS0I5TGdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPdURjb0tuWUZGYVVneXNWZDVRbDRDYjFnN2MzdU4rRk9UZ1FjcDlPYzJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZkUUZEN0VFRVlyRVVOY1Q2VncyUzBMRnZBVkxybTVhUUs5QzdRTmFycC92OTdNNWxpL2hlSGRlSFRrbi9zTGFsSnh4ak9aTFlDc3dtS3JOM3Z1ckFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImR0V0EvVmNnVXVIbVpoZjZqeTN4bEFFZTU4eEdkTTgwSlVyL1BJWmZYbEszQVhaSkNnTmhVeHdYNEZEV3ZTZlR5M0YyUEUvVW82ejVhMGpEYmVseURnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzkwNTAyNjcwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWZW5vbSAxXzlcIixcbiAgICBcImxpZFwiOiBcIjUxNDE1MTIxMDE5OTI6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5MDUwMjY3MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTUzOTQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEpGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSkUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6a1hid0hFL0p2MSs5TFM0OU5lUkoyM2tmVXc2T0xFczBQeC85YXVmbTNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ5NDI1NDgzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEpGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGlsR0NIbDNZUXB1Y1dmY0kxbi9rbkZMbVBidmF6elFnZGhGT3lDcThyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTQyNTQ4MzMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyODk5ODU2MDk2NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
