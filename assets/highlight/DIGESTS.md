## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-no5/zgQGupzPFGWV8VpJzfQau5/GI2v5b7I45l6nKc8gMOxzBHfgyxNdjQEnmW94 /es/languages/bash.js
sha384-u2nRnIxVxHkjnpxFScw/XgxNVuLz4dXXiT56xbp+Kk2b8AuStNgggHNpM9HO569A /es/languages/bash.min.js
sha384-0StLGSBIhoerTxrjwG/Lx1LYO/qmSp2TzCqgzCmnBDrVmkkeaFW9vHKuLHK5Ue7H /es/languages/ini.js
sha384-Qk1583V3PAnmXJ00e8ufkLJOuIZIrqrg5sTGoghEOwikzdWrdpiJv8lQqrURXjBG /es/languages/ini.min.js
sha384-OJrXTVCemUa68axskWVxZHXuDfyPWWFK0X2cJsPaMBt6jGY1HxnBZJVPEHTqou4H /es/languages/lua.js
sha384-cjlU8DPjZ3XY/dLzIx+CaoB2jzKXf43s2KSU2rZQGmxwR1d7k9p+SFt1IsNkFnnV /es/languages/lua.min.js
sha384-40MP6/ECSjYaTAIf+/ibE2FPeFPQ53WbASndXxMOcXiQtgLbGXUStZVuPSngp7OD /es/languages/yaml.js
sha384-vXmhozexi2dHQBoniIEbWI5ZqDxyVfUs96BUGpqjWL1aberSp9pyxbvK8WCNASGB /es/languages/yaml.min.js
sha384-4SbTAv3AX2fuPCpSv6HW3p07YgA7hFfcwG2zJHtYv0ATIt1juD3IXj2NSYwTeIpm /languages/bash.js
sha384-83HvQQdGTWqnRLmgm19NjCb1+/awKJGytUX9sm3HJb2ddZ9Fs1Bst2bZogFjt9rr /languages/bash.min.js
sha384-l2Aa/1StxIePW3t8ALFDwO/VZShzdfn5Y+0qIFkvO4WXem4DA5+6fgKQW+w/xKEk /languages/ini.js
sha384-0/1VV9gfjl+ZuUf+R7fvp6dQlJ5JVh+WzEqjzOwd+PCh8fa104Vm13MBaJjTz+cG /languages/ini.min.js
sha384-N16TmpAW2Qx3T6s3/C0f0jweUUSh69YsJ1+AnOsAePpjmmydXF/mjeY0MZEF/cPn /languages/lua.js
sha384-WES4Ky9nlehN2gBM6oY3/98hVtWF5PZnBO+7jK8ZVKFo+QR32zhfuRK+Mv9jQsOK /languages/lua.min.js
sha384-3KIoWvJ5JGRH35WAkzreEebY8sug+ZWeaOPS2r1KIfznEU9TtPFpxX6sIgtaiA9G /languages/yaml.js
sha384-bMkvdnz+wPu1ro0fqO3BaDWztc7RzSvw05MQFP6bhJKDcwpkrFYTfTFI9ndkP11l /languages/yaml.min.js
sha384-1SCDARoR+W07U5KpHbmYK8KhtB6TOD780TeVbPln2UgmT8z+bfCE1/+qmS+6sDrB /highlight.js
sha384-SpRL9SguxarYzmjan6575DvIkVVZNdXfGjwBqB7x7VQLX4/oESIpgcf/oPyyESfo /highlight.min.js
```

