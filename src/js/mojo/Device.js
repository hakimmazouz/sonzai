/**
 * @author Kenta Toshikura
 * @url kentatoshikura.com
 */

const apple_phone = /iPhone/i,
	apple_ipod = /iPod/i,
	apple_tablet = /iPad/i,
	android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
	android_tablet = /Android/i,
	amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	windows_phone = /Windows Phone/i,
	windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
	other_blackberry = /BlackBerry/i,
	other_blackberry_10 = /BB10/i,
	other_opera = /Opera Mini/i,
	other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
	seven_inch = new RegExp('(?:' + 'Nexus 7' + '|' + 'BNTV250' + '|' + 'Kindle Fire' + '|' + 'Silk' + '|' + 'GT-P1000' + ')', 'i');

const match = function (regex, userAgent) {
	return regex.test(userAgent);
};
const IsMobileClass = function (userAgent) {
	const ua = userAgent || navigator.userAgent;
	var tmp = ua.split('[FBAN');
	if (typeof tmp[1] !== 'undefined') {
		ua = tmp[0];
	}
	tmp = ua.split('Twitter');
	if (typeof tmp[1] !== 'undefined') {
		ua = tmp[0];
	}
	this.apple = {
		phone: match(apple_phone, ua),
		ipod: match(apple_ipod, ua),
		tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
		device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	};
	this.amazon = {
		phone: match(amazon_phone, ua),
		tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
		device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	};
	this.android = {
		phone: match(amazon_phone, ua) || match(android_phone, ua),
		tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
		device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	};
	this.windows = {
		phone: match(windows_phone, ua),
		tablet: match(windows_tablet, ua),
		device: match(windows_phone, ua) || match(windows_tablet, ua)
	};
	this.other = {
		blackberry: match(other_blackberry, ua),
		blackberry10: match(other_blackberry_10, ua),
		opera: match(other_opera, ua),
		firefox: match(other_firefox, ua),
		chrome: match(other_chrome, ua),
		device: match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	};
	this.seven_inch = match(seven_inch, ua);
	this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	if (typeof window === 'undefined') {
		return this;
	}
};

export default new IsMobileClass