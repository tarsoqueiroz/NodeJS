/**
 * index.js
 *
 * Created by tarso on 28/06/18
 * Source: https://gist.github.com/alvarow/0377eb3ffec534428135eec1ea80ba9f
 */

const https = require('https');
const fs = require('fs');

const options = {
  passphrase: 'serverphrase',
//  dhparam: fs.readFileSync('./certificates/dhparam.pem'),
  key: fs.readFileSync('./certificates/server.key'),
  cert: fs.readFileSync('./certificates/server.crt'),
  ca: fs.readFileSync('./certificates/ca.crt')
};

https.createServer(options, (req, res) => {

  const caCrt = '-----BEGIN CERTIFICATE-----\n' +
    'MIIGIzCCBAugAwIBAgIJANChu6bmk6s4MA0GCSqGSIb3DQEBCwUAMIGnMQswCQYD\n' +
    'VQQGEwJCUjEPMA0GA1UECAwGUGFyYW5hMREwDwYDVQQHDAhDdXJpdGliYTEWMBQG\n' +
    'A1UECgwNVGFyc28gUXVlaXJvejEUMBIGA1UECwwLVFEgUmVzZWFyY2gxHzAdBgNV\n' +
    'BAMMFlRhcnNvIFF1ZWlyb3ogUmVzZWFyY2gxJTAjBgkqhkiG9w0BCQEWFnRhcnNv\n' +
    'cXVlaXJvekBnbWFpbC5jb20wHhcNMTgwNjI4MTg1MTQ2WhcNMjgwNjI1MTg1MTQ2\n' +
    'WjCBpzELMAkGA1UEBhMCQlIxDzANBgNVBAgMBlBhcmFuYTERMA8GA1UEBwwIQ3Vy\n' +
    'aXRpYmExFjAUBgNVBAoMDVRhcnNvIFF1ZWlyb3oxFDASBgNVBAsMC1RRIFJlc2Vh\n' +
    'cmNoMR8wHQYDVQQDDBZUYXJzbyBRdWVpcm96IFJlc2VhcmNoMSUwIwYJKoZIhvcN\n' +
    'AQkBFhZ0YXJzb3F1ZWlyb3pAZ21haWwuY29tMIICIjANBgkqhkiG9w0BAQEFAAOC\n' +
    'Ag8AMIICCgKCAgEA4M7jSWeuCTkGRWr9fP1JzsDhllm+LxhRySbbilIrcrDdVdP8\n' +
    'skJHCD467bMewIsPHEBK3E1MaGIRO8LgmFJhegv69tiaONlwknoQ8l+h0ROT0WuQ\n' +
    'Yk91+sB4UcS9zT4pMR9AC3t200uvac8u+FFIBm5S7NxBCW4S5tY9748QBmclPQ6g\n' +
    'ob3Q8ISYyXN+4HX4N2nLuXgFnQz8i2p0U7CYu/4lq72iPyULHocgpMLE7Hca3BY/\n' +
    'J1hO836v/OpoGIwVzQtsPHBxOvoXGwAwOhvnxcCifOLcD+RYPxqBpuaI955864Tn\n' +
    'u8H8FtWBh30KOYaSTG4v8sEyJ71Wbz1ntlkBz5RJZ98VRG1fGuOmJxoyoEaTt435\n' +
    'QYYcHLBrJfycPTXOVbxzEQniMQY0d3PzUTeBtRCImGJPTW/UvGsbKoi/7+pDEEf9\n' +
    '/LMER/PzV5pV9aXplPPAYsTdgaY4ppCMKDVlyZ/ub2uGpWVoZE0P3BwZXi18HwL6\n' +
    'fkQoAQ1u7kvUvjKM6/M/HrTI+dcmRZmChJbr6k//qHiOR0XGNJBbfY5c/6CSspJD\n' +
    '5u6bIb3204uNaluUb1tuOCgTOn9ULs7B2rb+ZUAsx8JwRrEKtKrm8B1Oi5FPKMeW\n' +
    'UeNsPf+HmxiVZ1Tpi6u3jOkScLc8jCXuvtpMcDsKFUOwIQL30OWXi0qbUtcCAwEA\n' +
    'AaNQME4wHQYDVR0OBBYEFBOPR5c9DGYPXUE/qO7FChGKMyd1MB8GA1UdIwQYMBaA\n' +
    'FBOPR5c9DGYPXUE/qO7FChGKMyd1MAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEL\n' +
    'BQADggIBACM0xXBC/NxAO1WXOE2LQx7O1PXwW7PClp1ZpgpTyukf/xN+/rfhqzIn\n' +
    'GN0XlnnVKvm7e2xkPFG1Z9+iBuhZOwlF3kFBVgkqtqGlLlL5eiaKaLbmLbOuwAZy\n' +
    'BSPybnauO5Aw5f75kZaa2B0yyjUdmIfeMzGZuLvUgoRkO8XNK1gXQPTq9bYuj4Di\n' +
    'wluCSkVZQfTWf+srCeX/Vem9zKxgJ2XCyMsruzx5bigkSjWGffmA0LQT6XcJD8Wa\n' +
    'VvUQp8L4+KilmaRchKblGRHS9NJ2mhfoA2n8JkicHGmo0zxGq5b+SMw6XxLdm1qB\n' +
    '3co5OPc3DUpt3tAhMCJXNeWJ1WBoJMB/mIcyt8mvt8jA6cC45UNd68QPVZH6tX9C\n' +
    'JLKiusxZ4/DkAd2S0Q0NIzvlhsAux0ZkOWE2tNNmhgx8xlRFVJYQsX/ZnFpDjJAb\n' +
    'JNlnpgDwsgQOeyqaSqaWaGs56ERWNBhLbYGCjQlDB5MdLlquUhSAap9WK/JR1s3A\n' +
    '9o4BJvt/JC/1XtGmQEGj4lcOeaydJ1TZtotYWBr3CZSURwMOgExKojwlyuJWJEz0\n' +
    'Ml7irZD0aexUKTbpZP8K7kd/Cw8IQqMdnPTJwli6K0K1sarreOSU+r7sNnLJg3cm\n' +
    'Srsu/ZAKTJyLCRTFPVd83qoa5PbrPdCua3uDwDKCgzyVxgkeEfSA\n' +
    '-----END CERTIFICATE-----'

  res.writeHead(200);
  res.end(caCrt);
}).listen(8443);