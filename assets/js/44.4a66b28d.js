(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{394:function(e,n,t){e.exports=t.p+"assets/img/macrecovery.af5c41c1.png"},395:function(e,n,t){e.exports=t.p+"assets/img/download-done.05d30da0.png"},568:function(e,n,t){e.exports=t.p+"assets/img/fat32-erase.d4148162.png"},569:function(e,n,t){e.exports=t.p+"assets/img/dmg-chunklist.c22cb668.png"},709:function(e,n,t){"use strict";t.r(n);var o=t(35),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"legacy-macos-online-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-online-method"}},[e._v("#")]),e._v(" Legacy macOS: Online Method")]),e._v(" "),o("p",[e._v("This method allows us to download legacy versions of macOS including 10.7 to current, however these are only recovery installers so require an internet connection inside the installer itself")]),e._v(" "),o("p",[e._v("To start, you'll want to use macrecovery.py instead. This tool is actually already bundled in OpenCorePkg:")]),e._v(" "),o("p",[o("img",{attrs:{src:t(394),alt:""}})]),e._v(" "),o("p",[e._v("Instructions for running are quite simple, choose from one of the below commands depending on which OS you want to download:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lion (10.7):")]),e._v("\npython3 ./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\npython3 ./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mountain Lion (10.8):")]),e._v("\npython3 ./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mavericks (10.9):")]),e._v("\npython3 ./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yosemite (10.10):")]),e._v("\npython3 ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# El Capitan (10.11):")]),e._v("\npython3 ./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sierra (10.12):")]),e._v("\npython3 ./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# High Sierra (10.13)")]),e._v("\npython3 ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\npython3 ./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mojave (10.14)")]),e._v("\npython3 ./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Catalina (10.15)")]),e._v("\npython3 ./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Big Sur (11)")]),e._v("\npython3 ./macrecovery.py -b Mac-42FD25EABCABB274 -m 00000000000000000 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest version")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ie. Monterey (12)")]),e._v("\npython3 ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),o("ul",[o("li",[o("strong",[e._v("macOS 12, Monterey Note")]),e._v(": As this OS is quite new, there's still some issues with certain systems to resolve. For more information, see here: "),o("RouterLink",{attrs:{to:"/extras/monterey.html"}},[e._v("macOS 12: Monterey")]),e._v(" "),o("ul",[o("li",[e._v("For first time users, we recommend macOS Catalina (10.15) or Big Sur (11)")]),e._v(" "),o("li",[o("span",{staticStyle:{color:"red"}},[e._v(" CAUTION: ")]),e._v(" With macOS 11.3 and newer, "),o("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[e._v("XhciPortLimit is broken resulting in boot loops"),o("OutboundLink")],1),e._v(". We advise users either install an older OS(ie. macOS 10.15, Catalina) or find a 11.2.3 or older Big Sur installer\n"),o("ul",[o("li",[e._v("For education purposes, we have a copy provided here: "),o("a",{attrs:{href:"https://archive.org/details/install-mac-os-11.2.3-20-d-91",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS 11.2.3 InstallAssistant(macOS)"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("If you've already "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mapped your USB ports"),o("OutboundLink")],1),e._v(" and disabled "),o("code",[e._v("XhciPortLimit")]),e._v(", you can boot macOS 11.3+ without issue")])])])])],1)]),e._v(" "),o("p",[e._v("From here, run one of those commands in terminal and once finished you'll get an output similar to this:")]),e._v(" "),o("p",[o("img",{attrs:{src:t(395),alt:""}})]),e._v(" "),o("p",[e._v("Once this is done, format your USB as FAT32 with GUID Partition Scheme:")]),e._v(" "),o("p",[o("img",{attrs:{src:t(568),alt:""}})]),e._v(" "),o("p",[e._v("And finally, create folder on the root of this drive called "),o("code",[e._v("com.apple.recovery.boot")]),e._v(" and place the newly downloaded BaseSystem/RecoveryImage files in:")]),e._v(" "),o("p",[o("img",{attrs:{src:t(569),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment"}},[e._v("#")]),e._v(" Once you're finished, you can head to "),o("RouterLink",{attrs:{to:"/installer-guide/mac-install.html#setting-up-opencore-s-efi-environment"}},[e._v("Setting up OpenCore's EFI environment")])],1)])}),[],!1,null,null,null);n.default=a.exports}}]);
