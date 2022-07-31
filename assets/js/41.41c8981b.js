(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{389:function(e,t,i){e.exports=i.p+"assets/img/populated-efi.8d46cc52.png"},582:function(e,t,i){e.exports=i.p+"assets/img/ia32-x64.aa5dccd9.png"},583:function(e,t,i){e.exports=i.p+"assets/img/efi-moved.87262fda.png"},584:function(e,t,i){e.exports=i.p+"assets/img/base-efi.7500e22d.png"},585:function(e,t,i){e.exports=i.p+"assets/img/clean-efi.10fb2a26.png"},714:function(e,t,i){"use strict";i.r(t);var o=i(35),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adding-the-base-opencore-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-base-opencore-files"}},[e._v("#")]),e._v(" Adding The Base OpenCore Files")]),e._v(" "),o("p",[e._v("To setup OpenCore’s folder structure, you’ll want to grab the EFI folder found in "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg's releases"),o("OutboundLink")],1),e._v(". Note that they will be under either the IA32 or X64 folders, the former for 32-bit Firmwares and the latter for 64-bit Firmwares:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(582),alt:""}})]),e._v(" "),o("p",[e._v("Regarding DEBUG versus RELEASE version:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("DEBUG")]),e._v(": Can greatly help with debugging boot issues, however can add some noticeable delay to boot times(ie. 3-5 seconds to get to the picker). Once installed you can easily transition to RELEASE")]),e._v(" "),o("li",[o("strong",[e._v("RELEASE")]),e._v(": Much snappier boot times, however virtually no useful DEBUG info is provided in OpenCore making troubleshooting much more difficult.")])]),e._v(" "),o("p",[e._v("And once downloaded, place the EFI folder(from OpenCorePkg) on the root of your EFI partition:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(583),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Windows users:")]),e._v(" you'll want to place the EFI folder on the root of the USB drive you made earlier")]),e._v(" "),o("li",[o("strong",[e._v("Linux users:")]),e._v(" This is the "),o("code",[e._v("OPENCORE")]),e._v(" partition we created earlier\n"),o("ul",[o("li",[e._v("Note that Method 1 only creates 1 partition, while Method 2 creates 2 partitions")])])])]),e._v(" "),o("p",[e._v("Now lets open up our EFI folder and see what's inside:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(584),alt:"base EFI folder"}})]),e._v(" "),o("p",[e._v("Now something you'll notice is that it comes with a bunch of files in "),o("code",[e._v("Drivers")]),e._v(" and "),o("code",[e._v("Tools")]),e._v(" folder, we don't want most of these:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Keep the following from Drivers")]),e._v("(if applicable):")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Driver")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Status")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("OpenUsbKbDxe.efi")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"},attrs:{rowspan:"3"}},[o("span",{staticStyle:{color:"#30BCD5"}},[e._v(" Optional ")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Required for non-UEFI systems(pre-2012)")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("OpenPartitionDxe.efi")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Required to boot macOS 10.7-10.9 recovery")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("AllowNvramReset.efi")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Required to reset the system's NVRAM")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("OpenRuntime.efi")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("span",{staticStyle:{color:"red"}},[e._v(" Required ")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Required for proper operation")])])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("More info on provided drivers")]),e._v(" "),o("ul",[o("li",[e._v("AudioDxe.efi\n"),o("ul",[o("li",[e._v("Unrelated to Audio support in macOS")])])]),e._v(" "),o("li",[e._v("CrScreenshotDxe.efi\n"),o("ul",[o("li",[e._v("Used for taking screenshots in UEFI, not needed by us")])])]),e._v(" "),o("li",[e._v("HiiDatabase.efi\n"),o("ul",[o("li",[e._v("Used for fixing GUI support like OpenShell.efi on Sandy Bridge and older")]),e._v(" "),o("li",[e._v("Not required for booting")])])]),e._v(" "),o("li",[e._v("NvmExpressDxe.efi\n"),o("ul",[o("li",[e._v("Used for Haswell and older when no NVMe driver is built into the firmware")]),e._v(" "),o("li",[e._v("Don't use unless you know what you're doing")])])]),e._v(" "),o("li",[e._v("OpenCanopy.efi\n"),o("ul",[o("li",[e._v("This is OpenCore's optional GUI, we'll be going over how to set this up in "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Post Install"),o("OutboundLink")],1),e._v(" so remove this for now")])])]),e._v(" "),o("li",[e._v("OpenHfsPlus.efi\n"),o("ul",[o("li",[e._v("Open sourced HFS Plus driver, quite slow so we recommend not using unless you know what you're doing.")])])]),e._v(" "),o("li",[e._v("OpenPartitionDxe.efi\n"),o("ul",[o("li",[e._v("Required to boot recovery on OS X 10.7 through 10.9\n"),o("ul",[o("li",[e._v("Note: OpenDuet users(ie. without UEFI) will have this driver built-in, not requiring it")])])])])]),e._v(" "),o("li",[e._v("OpenUsbKbDxe.efi\n"),o("ul",[o("li",[e._v("Used for OpenCore picker on "),o("strong",[e._v("legacy systems running DuetPkg")]),e._v(", "),o("a",{attrs:{href:"https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653",target:"_blank",rel:"noopener noreferrer"}},[e._v("not recommended and even harmful on Ivy Bridge and newer"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("Ps2KeyboardDxe.efi + Ps2MouseDxe.efi\n"),o("ul",[o("li",[e._v("Pretty obvious when you need this, USB keyboard and mouse users don't need it")]),e._v(" "),o("li",[e._v("Reminder: PS2 ≠ USB")])])]),e._v(" "),o("li",[e._v("ResetNvramEntry.efi\n"),o("ul",[o("li",[e._v("OpenCore plugin implementing OC_BOOT_ENTRY_PROTOCOL to add a configurable Reset NVRAM entry to the boot picker menu.")])])]),e._v(" "),o("li",[e._v("UsbMouseDxe.efi\n"),o("ul",[o("li",[e._v("similar idea to OpenUsbKbDxe, should only be needed on legacy systems using DuetPkg")])])]),e._v(" "),o("li",[e._v("XhciDxe.efi\n"),o("ul",[o("li",[e._v("Used for Sandy Bridge and older when no XHCI driver is built into the firmware")]),e._v(" "),o("li",[e._v("Only needed if you're using a USB 3.0 expansion card in an older machine")])])])])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Keep the following from Tools:")])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Tool")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Status")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("OpenShell.efi")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("span",{staticStyle:{color:"#30BCD5"}},[e._v(" Optional ")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Recommended for easier debugging")])])])]),e._v(" "),o("p",[e._v("A cleaned up EFI:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(585),alt:"Clean EFI"}})]),e._v(" "),o("p",[e._v("Now you can place "),o("strong",[e._v("your")]),e._v(" necessary firmware drivers(.efi) into the "),o("em",[e._v("Drivers")]),e._v(" folder and Kexts/ACPI into their respective folders. See "),o("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("Gathering Files")]),e._v(" for more info on which files you should be using.")],1),e._v(" "),o("ul",[o("li",[e._v("Please note that UEFI drivers from Clover are not supported with OpenCore!(EmuVariableUEFI, AptioMemoryFix, OsxAptioFixDrv, etc). Please see the "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion/clover-efi.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover firmware driver conversion"),o("OutboundLink")],1),e._v(" for more info on supported drivers and those merged into OpenCore.")])]),e._v(" "),o("p",[e._v("Here's what a populated EFI "),o("strong",[o("em",[e._v("can")])]),e._v(" look like (yours will be different):")]),e._v(" "),o("p",[o("img",{attrs:{src:i(389),alt:"Populated EFI folder"}})]),e._v(" "),o("p",[o("strong",[e._v("Reminder")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("SSDTs and custom DSDTs("),o("code",[e._v(".aml")]),e._v(") go in ACPI folder")]),e._v(" "),o("li",[e._v("Kexts("),o("code",[e._v(".kext")]),e._v(") go in Kexts folder")]),e._v(" "),o("li",[e._v("Firmware drivers("),o("code",[e._v(".efi")]),e._v(") go in the Drivers folder")])]),e._v(" "),o("h1",{attrs:{id:"now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[e._v("#")]),e._v(" Now with all this done, head to "),o("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("Gathering Files")]),e._v(" to get the needed kexts and firmware drivers")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);