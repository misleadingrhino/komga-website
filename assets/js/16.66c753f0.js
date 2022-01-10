(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(e,a,t){"use strict";t.r(a);var r=t(26),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[e._v("#")]),e._v(" Libraries")]),e._v(" "),t("p",[e._v("You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.")]),e._v(" "),t("p",[e._v("Each library has a root folder, and no library can share any part of their path.")]),e._v(" "),t("p",[e._v("For example if you have a library with a root path of "),t("code",[e._v("/books/mangas")]),e._v(", you can't create a library with a root path of "),t("code",[e._v("/books")]),e._v(", because the two root paths would overlap. You can however create a library with a root path of "),t("code",[e._v("/books/comics")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"creating-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-libraries"}},[e._v("#")]),e._v(" Creating libraries")]),e._v(" "),t("p",[e._v("From the web interface:")]),e._v(" "),t("ul",[t("li",[e._v("click on the "),t("em",[e._v("+")]),e._v(" icon next to "),t("em",[e._v("Libraries")]),e._v(" in the sidebar "),t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/assets/media/guides/libraries/library-add.png"}})]),e._v(" "),t("li",[e._v("choose a "),t("em",[e._v("Name")]),e._v(" for your library")]),e._v(" "),t("li",[e._v("click the "),t("em",[e._v("Browse")]),e._v(" button and select a root folder containing your books")]),e._v(" "),t("li",[e._v("click "),t("em",[e._v("Add")])])]),e._v(" "),t("img",{staticStyle:{"vertical-align":"middle","max-height":"300px"},attrs:{src:"/assets/media/guides/libraries/library-add-dialog.png",alt:"Add Library Dialog"}}),e._v(" "),t("p",[e._v("You can also specify extra options.")]),e._v(" "),t("img",{staticStyle:{"vertical-align":"middle","max-height":"600px"},attrs:{src:"/assets/media/guides/libraries/library-add-options.png",alt:"Add Library Dialog Options"}}),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("img",{staticStyle:{"vertical-align":"middle","max-height":"600px"},attrs:{src:"/assets/media/guides/libraries/library-add-metadata.png",alt:"Add Library Dialog Metadata"}}),e._v(" "),t("h3",{attrs:{id:"scanner-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scanner-options"}},[e._v("#")]),e._v(" Scanner options")]),e._v(" "),t("h4",{attrs:{id:"empty-trash-automatically-after-every-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empty-trash-automatically-after-every-scan"}},[e._v("#")]),e._v(" Empty trash automatically after every scan "),t("Badge",{attrs:{text:"0.107.0+"}})],1),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/guides/trash.html#automatically-empty-trash"}},[e._v("Emptying library trash")])],1),e._v(" "),t("h4",{attrs:{id:"force-directory-modified-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-directory-modified-time"}},[e._v("#")]),e._v(" Force directory modified time "),t("Badge",{attrs:{text:"0.56.0+"}})],1),e._v(" "),t("p",[e._v("This will force the last modified time of a directory as the maximum from its own last modified time and the last modified time from all the books inside the directory. This should be used only if your filesystem does not update the last modified time of a directory when files inside it are modified (Google Drive for instance).")]),e._v(" "),t("h4",{attrs:{id:"deep-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deep-scan"}},[e._v("#")]),e._v(" Deep scan "),t("Badge",{attrs:{text:"0.56.0+"}})],1),e._v(" "),t("p",[e._v("This will force the scanner to compare all scanned books with the ones stored in the database. Normally this is not required, as Komga uses the last modified time of the parent folders to decide whether to compare books, but some filesystems may behave differently.")]),e._v(" "),t("p",[e._v("Enable Deep Scan if Komga often miss some books after a scan.")]),e._v(" "),t("h3",{attrs:{id:"analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[e._v("#")]),e._v(" Analysis")]),e._v(" "),t("h4",{attrs:{id:"compute-hash-for-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compute-hash-for-files"}},[e._v("#")]),e._v(" Compute hash for files "),t("Badge",{attrs:{text:"0.143.0+"}})],1),e._v(" "),t("p",[e._v('Komga will compute a filehash for your files. This is required for the "restore from trash bin" functionality to work, and to detect duplicate files.')]),e._v(" "),t("p",[e._v("This can consume lots of resources on large libraries or slow hardware.")]),e._v(" "),t("h4",{attrs:{id:"compute-hash-for-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compute-hash-for-pages"}},[e._v("#")]),e._v(" Compute hash for pages "),t("Badge",{attrs:{text:"0.143.0+"}})],1),e._v(" "),t("p",[e._v("Komga will compute a filehash for the pages in each book ("),t("code",[e._v("cbz")]),e._v("/"),t("code",[e._v("cbr")]),e._v(" only). Those will be used to detect duplicate pages (in a future release).")]),e._v(" "),t("p",[e._v("This can consume lots of resources on large libraries or slow hardware.")]),e._v(" "),t("h4",{attrs:{id:"analyze-page-dimensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyze-page-dimensions"}},[e._v("#")]),e._v(" Analyze page dimensions "),t("Badge",{attrs:{text:"0.143.0+"}})],1),e._v(" "),t("p",[e._v("Komga will retrieve each page's dimensions (width and height). This is useful for:")]),e._v(" "),t("ul",[t("li",[e._v("properly displaying landscape pages in the web reader, when using double pages")]),e._v(" "),t("li",[e._v('comparing page dimensions in the "Import" dialog')])]),e._v(" "),t("p",[e._v("This can consume lots of resources on large libraries or slow hardware.")]),e._v(" "),t("h3",{attrs:{id:"file-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-management"}},[e._v("#")]),e._v(" File management")]),e._v(" "),t("h4",{attrs:{id:"automatically-repair-incorrect-file-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatically-repair-incorrect-file-extensions"}},[e._v("#")]),e._v(" Automatically repair incorrect file extensions "),t("Badge",{attrs:{text:"0.92.0+"}})],1),e._v(" "),t("p",[e._v("Files with an incorrect extension will be automatically renamed in the background. For exemple a "),t("code",[e._v("zip")]),e._v(" file with a "),t("code",[e._v(".cbr")]),e._v(" extension will be renamed to "),t("code",[e._v(".cbz")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"automatically-convert-to-cbz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatically-convert-to-cbz"}},[e._v("#")]),e._v(" Automatically convert to CBZ "),t("Badge",{attrs:{text:"0.91.0+"}})],1),e._v(" "),t("p",[e._v("Books in "),t("code",[e._v("rar")]),e._v("/"),t("code",[e._v("cbr")]),e._v(" format (RAR4 only) will be converted to "),t("code",[e._v("cbz")]),e._v(" automatically in the background. The "),t("code",[e._v("zip")]),e._v(" files are created with the "),t("code",[e._v("DEFLATE")]),e._v(" method without compression.")]),e._v(" "),t("h3",{attrs:{id:"series-cover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#series-cover"}},[e._v("#")]),e._v(" Series cover "),t("Badge",{attrs:{text:"0.110.0+"}})],1),e._v(" "),t("p",[e._v("Choose which book cover is used for the series.")]),e._v(" "),t("h3",{attrs:{id:"metadata-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata-options"}},[e._v("#")]),e._v(" Metadata options")]),e._v(" "),t("p",[e._v("Check the "),t("RouterLink",{attrs:{to:"/guides/scan-analysis-refresh.html#refresh-metadata"}},[e._v("Refresh Metadata")]),e._v(" section to know more about what they do.")],1),e._v(" "),t("h2",{attrs:{id:"edit-a-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-a-library"}},[e._v("#")]),e._v(" Edit a library")]),e._v(" "),t("p",[e._v("To edit a library, look for the action menu icon "),t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/assets/media/guides/action-menu-icon.png",height:"32"}}),e._v(" and click on "),t("em",[e._v("Edit")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you change the root folder of a library, and "),t("strong",[e._v("the new path doesn't share anything with the previous path")]),e._v(", you will lose all your series, books and read progress for that library.")]),e._v(" "),t("p",[e._v("If you change the path "),t("strong",[e._v("for a parent directory of the current path")]),e._v(", you will not lose your content.")]),e._v(" "),t("p",[e._v("If you change the path "),t("strong",[e._v("for a child directory of the current path")]),e._v(", you will lose part of your content.")])]),e._v(" "),t("h2",{attrs:{id:"delete-a-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-library"}},[e._v("#")]),e._v(" Delete a library")]),e._v(" "),t("p",[e._v("To delete a library, look for the action menu icon "),t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/assets/media/guides/action-menu-icon.png",height:"32"}}),e._v(" and click on "),t("em",[e._v("Delete")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted.")]),e._v(" "),t("p",[e._v("Your media files will not be affected.")]),e._v(" "),t("p",[e._v("This cannot be undone.")])])])}),[],!1,null,null,null);a.default=i.exports}}]);