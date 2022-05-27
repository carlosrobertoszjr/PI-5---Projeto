"use strict";
class Payload {
 
    constructor() {
        this.obPayload = (new Payload) = this.setPixKey('14726472704')
        this.setDescription('Pagamento do Pedido')
        this.setMerchantName('Daniel')
        this.setMerchantCity('ES')
        this.SetAmount(1.0)
        this.setTxid('Girassol');
        this.payload = obPayload = getPayload();
        /**
     * IDs do Payload do Pix
     * @var string
     */
        this.ID_PAYLOAD_FORMAT_INDICATOR = '00';
        this.ID_MERCHANT_ACCOUNT_INFORMATION = '26';
        this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI = '00';
        this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY = '01';
        this.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION = '02';
        this.ID_MERCHANT_CATEGORY_CODE = '52';
        this.ID_TRANSACTION_CURRENCY = '53';
        this.ID_TRANSACTION_AMOUNT = '54';
        this.ID_COUNTRY_CODE = '58';
        this.ID_MERCHANT_NAME = '59';
        this.ID_MERCHANT_CITY = '60';
        this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE = '62';
        this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = '05';
        this.ID_CRC16 = '63';
    }

    
    setPixKey(pixKey) {
        return this = pixKey;
    }
    
    setDescription(description) {
        return this = description;
    }
    
    setMerchantName(merchantName) {
        return this = merchantName;
    }
    
    setMerchantCity(merchantCity) {
        return this = merchantCity;
    }

    setTxid(txid) {
        return this = txid;
    }
    
    SetAmount(amount) {
        return amount.toFixed(2);
    }

    getValue(id, value) {
        var size = String.padStart(String.length(value), 2, '0');
    }

    getMerchantAccountInformation() {
        var gui = this.getValue(self, this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI, 'br.gov.bcb.pix');
        var key = this.getValue(self, this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY, 'this->pixKey');
        var description = String.length(this = description) ? this = this.getValue(sef, this.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION, 'this->description') : '';
        return this.getValue(self, this.ID_MERCHANT_ACCOUNT_INFORMATION, gui.key.description);
    }

    getAdditionalDataFieldTemplate() {
        txid = this.getValue(self, this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID, this = txid);
        return this.getValue(self, this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID, txid);
    }

    getPayload() {
        payload = `
        ${this.getValue(self, this.ID_PAYLOAD_FORMAT_INDICATOR, '01')}
        ${this.getMerchantAccountInformation()}
        ${this.getValue(self, this.ID_MERCHANT_CATEGORY_CODE, '0000')}
        ${this.getValue(self, this.ID_TRANSACTION_CURRENCY, '986')}
        ${this.getValue(self, this.ID_TRANSACTION_AMOUNT, this = amount)}
        ${this.getValue(self, this.ID_COUNTRY_CODE, 'BR')}
        ${this.getValue(self, this.ID_MERCHANT_NAME, this = merchantName)}
        ${this.getValue(self, this.ID_MERCHANT_CITY, this = merchantCity)}
        ${this.getAdditionalDataFieldTemplate()}`
        return this.payload = this.getCRC16(this.payload);
    }
    
    getCRC16(payload) {
        payload = self;
        
        polinomio = 0x1021;
        resultado = 0xFFFF;

        
        if ((length = strlen(payload)) > 0) {
            for (offset = 0; offset < length; offset++) {
                resultado ^= (ord(payload[offset]) << 8);
                for (bitwise = 0; bitwise < 8; bitwise++) {
                    if ((resultado <<= 1) & 0x10000)
                    resultado ^= polinomio;
                    resultado &= 0xFFFF;
                }
            }
        }
       "04".toUpperCase(dechex(resultado));
        return self;
    }
}

function makeCode() {
    var elText = document.getElementById("obPayload");
    var qrcode = new QRCode("payloadQrCode");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);
}
