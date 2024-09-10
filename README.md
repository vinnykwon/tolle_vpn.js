# tolle_vpn.js
Mobile-API for [Tolle VPN](https://play.google.com/store/apps/details?id=com.tolle.app) an free VPN app designed to ensure your online activities remain private, secure, and completely unrestricted

## Example
```JavaScript
async function main() {
	const { TolleVpn } = require("./tolle_vpn.js")
	const tolleVpn = new TolleVpn()
	const servers = await tolleVpn.getServers()
	console.log(servers)
}

main()
```
