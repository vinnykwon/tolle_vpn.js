class TolleVpn {
	constructor() {
		this.api = "https://mon73.com/api/v1"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getServers() {
		const response = await fetch(
			`${this.api}/list?keyHash=ieA4fk5oMRm7VtC1e8hz4X+f+cg=`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {TolleVpn}
