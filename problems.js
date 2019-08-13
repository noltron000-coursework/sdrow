;(String.prototype.upperFirst = function() {
	return this.charAt(0).toUpperCase() + this.slice(1)
}),
	(String.prototype.lowerFirst = function() {
		return this.charAt(0).toLowerCase() + this.slice(1)
	}),
	(String.prototype.upperWord = function() {
		var t = this.split(' '),
			e = ''
		return (
			t.forEach(function(t) {
				var r = t.upperFirst()
				e = e.concat(r, ' ')
			}),
			e.slice(0, -1)
		)
	}),
	(String.prototype.upperWiggle = function() {
		var e = ''
		return (
			Array.from(this).forEach(function(t, r) {
				;(t = r % 2 == 0 ? t.toUpperCase() : t.toLowerCase()), (e = e.concat(t))
			}),
			e
		)
	}),
	(String.prototype.removeSpaces = function() {
		return this.replace(/\s/g, '')
	}),
	(String.prototype.trimSpaces = function() {
		return this.split(/\s+/)
			.join(' ')
			.trim()
	}),
	(String.prototype.allCaps = function() {
		return this.toUpperCase()
	}),
	(String.prototype.kababCase = function() {
		return this.toLowerCase()
			.split(/\s+/)
			.join(' ')
			.trim()
			.replace(/\s+/g, '-')
	}),
	(String.prototype.snakeCase = function() {
		return this.toLowerCase()
			.split(/\s+/)
			.join(' ')
			.trim()
			.replace(/\s+/g, '_')
	}),
	(String.prototype.camelCase = function() {
		return this.trimSpaces()
			.upperWord()
			.removeSpaces()
			.lowerFirst()
	})
