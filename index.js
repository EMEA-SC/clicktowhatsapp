



var style = document.createElement('style');
style.type = 'text/css';
var myCSS = '.div-click-wa {border-style: solid;border-width: 5px;border-color: green;height: 200px;width: 350px;}.text-click-wa {color: green;font-size: 20px;text-align: center;margin-block-start: 0.1em;margin-block-end: 0em;margin-inline-start: 0.1px;margin-inline-end: 0px;}.wa-number {border-style: solid;border-width: 3px;border-color: green;font-size: 20px;color: green;height: 40px;width: 150px;margin: 10px 5px 15px 0px;}.custom-select {position: relative;font-family: Arial;}.custom-select select {display: none;}.select-selected {background-color: green;}.select-selected:after {position: absolute;content: "";top: 14px;right: 10px;width: 0;height: 0;border: 6px solid transparent;border-color: #fff transparent transparent transparent;}.select-selected.select-arrow-active:after {border-color: transparent transparent #fff transparent;top: 7px;}.select-items div,.select-selected {color: #ffffff;padding: 8px 16px;border: 1px solid transparent;border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;cursor: pointer;user-select: none;}.select-items {position: absolute;background-color: green;top: 100%;left: 0;right: 0;z-index: 99;}.select-hide {display: none;}.select-items div:hover, .same-as-selected {background-color: rgba(0, 0, 0, 0.1);}';


style.innerHTML = myCSS;
document.getElementsByTagName('head')[0].appendChild(style);


window.onload = function() {


document.getElementById("mycontainer-waclick").innerHTML+= '<div class="div-click-wa"><p class="text-click-wa">Wanna talk with us through WhatsApp?</p><p class="text-click-wa">Give us your number!</p><div class="custom-select" style="width:160px; margin: 10px 5px 15px 10px; float:left;"><select id="internationalCode"><option value="0">Select code:</option><option value="44">UK (+44)</option><option value="49">Germany (+49)</option><option value="33">France (+33)</option><option value="39">Italy (+39)</option></select></div><input type="text" class="wa-number" id="wa-number" name="number"><svg class ="wa-start" id="wa-button" style="display: block; margin: auto;"xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="55" version="1.1" viewBox="0 0 52.916668 14.552083"><defs><clipPath><path d="m1 1h640.93v132.88h-640.93z"/></clipPath><clipPath id="clip2"><rect width="642" height="134"/></clipPath><g clip-path="url(#clip2)"/><clipPath><path d="m1 1h210.93v210.88h-210.93z"/></clipPath><clipPath id="clip4"><rect width="212" height="212"/></clipPath><g clip-path="url(#clip4)"/><clipPath><path d="m1 1h210.93v210.88h-210.93z"/></clipPath><clipPath id="clip8"><rect width="212" height="212"/></clipPath><g clip-path="url(#clip8)"/><clipPath><path d="m1 1h117.93v110.88h-117.93z"/></clipPath><clipPath id="clip12"><rect width="119" height="112"/></clipPath><g clip-path="url(#clip12)"/><linearGradient id="linearGradient2628" x2="1" gradientTransform="matrix(0 -67.566 67.566 0 -9.7242 182.18)" gradientUnits="userSpaceOnUse"><stop stop-color="#20b038" offset="0"/><stop stop-color="#60d66a" offset="1"/></linearGradient><linearGradient id="linearGradient2630" x2="1" gradientTransform="matrix(0 -69.988 69.988 0 -9.724 183.4)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f9f9" offset="0"/><stop stop-color="#fff" offset="1"/></linearGradient></defs><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g transform="translate(81.25 -198.87)"><g transform="matrix(.26458 0 0 .26458 -59.753 156.95)"><rect x="-81.25" y="158.42" width="200" height="55" rx="3.6108" ry="3.6065" fill="#455a64" fill-rule="evenodd" stroke-width="0"/><g transform="matrix(.61632 0 0 .61632 -46.994 94.459)"><path d="m250.9 155.98c-0.18803 0.94791-0.51188 1.7752-0.96908 2.4857-0.45932 0.71085-1.059 1.2894-1.8009 1.7286-0.74013 0.44274-1.664 0.66499-2.7686 0.66499-1.0739 0-1.9893-0.22225-2.7464-0.66499-0.75847-0.43921-1.3649-1.0178-1.8242-1.7286-0.45508-0.71049-0.78811-1.5378-0.99413-2.4857-0.20496-0.9458-0.30691-1.9103-0.30691-2.8861 0-1.0139 0.0967-1.9921 0.28469-2.9372 0.18909-0.94756 0.51364-1.7836 0.97049-2.5135 0.4572-0.72426 1.058-1.3159 1.7995-1.7727 0.73942-0.45791 1.6634-0.68968 2.7697-0.68968 1.0728 0 1.9794 0.23177 2.7203 0.68968 0.74365 0.45684 1.3497 1.0548 1.8239 1.7978 0.47554 0.7426 0.81456 1.5882 1.0188 2.534 0.20743 0.94791 0.30797 1.9117 0.30797 2.8917 0 0.97578-0.0959 1.9403-0.28504 2.8861m6.3447-7.6962c-0.44239-1.5928-1.1204-2.9908-2.0366-4.191-0.91546-1.1991-2.0652-2.1632-3.4544-2.8882-1.3903-0.72743-3.0487-1.0887-4.9738-1.0887-1.5134 0-2.9034 0.29845-4.1649 0.89852-1.2629 0.60043-2.3047 1.5635-3.1252 2.8896h-0.0924v-3.127h-6.393v33.059h6.7218v-11.603h0.0952c0.82056 1.2008 1.8722 2.1071 3.1489 2.721 1.2774 0.6156 2.6758 0.92534 4.1914 0.92534 1.7974 0 3.3673-0.34996 4.7106-1.0428 1.3395-0.69357 2.4624-1.6263 3.3602-2.7951 0.9017-1.1688 1.5699-2.509 2.0122-4.0245 0.44415-1.5162 0.66357-3.0946 0.66357-4.736 0-1.7364-0.21942-3.4011-0.66357-4.9971m-33.14 7.6962c-0.19121 0.94791-0.51576 1.7752-0.97191 2.4857-0.45755 0.71085-1.058 1.2894-1.802 1.7286-0.73943 0.44274-1.6641 0.66499-2.7679 0.66499-1.0746 0-1.9861-0.22225-2.7439-0.66499-0.75883-0.43921-1.3656-1.0178-1.8239-1.7286-0.4579-0.71049-0.78881-1.5378-0.99448-2.4857-0.20602-0.9458-0.30621-1.9103-0.30621-2.8861 0-1.0139 0.0921-1.9921 0.28117-2.9372 0.19191-0.94756 0.51329-1.7836 0.97261-2.5135 0.45473-0.72426 1.0562-1.3159 1.8002-1.7727 0.74048-0.45791 1.6612-0.68968 2.7679-0.68968 1.0717 0 1.9826 0.23177 2.722 0.68968 0.74154 0.45684 1.3508 1.0548 1.8232 1.7978 0.47237 0.7426 0.81139 1.5882 1.0174 2.534 0.20638 0.94791 0.30622 1.9117 0.30622 2.8917 0 0.97578-0.0921 1.9403-0.28046 2.8861m4.3064-11.887c-0.91405-1.1991-2.0673-2.1632-3.4565-2.8882-1.3896-0.72743-3.0452-1.0887-4.9696-1.0887-1.517 0-2.9048 0.29845-4.166 0.89852-1.2661 0.60043-2.3047 1.5635-3.1246 2.8896h-0.0967v-3.127h-6.3934v33.059h6.7275v-11.603h0.091c0.81985 1.2008 1.8722 2.1071 3.1514 2.721 1.2753 0.6156 2.673 0.92534 4.1885 0.92534 1.8002 0 3.3694-0.34996 4.7103-1.0428 1.3416-0.69357 2.4624-1.6263 3.362-2.7951 0.90065-1.1688 1.5684-2.509 2.0137-4.0245 0.4385-1.5162 0.66216-3.0946 0.66216-4.736 0-1.7364-0.22366-3.4011-0.66216-4.9971-0.44521-1.5928-1.1222-2.9908-2.0376-4.191m-44.219 8.0991 4.403-12.409h0.0938l4.2619 12.409zm0.70909-20.744-12.782 33.814h7.4806l2.6497-7.5304h12.643l2.5545 7.5304h7.7191l-12.64-33.814zm-13.352 23.088c-0.44168-0.77329-1.0259-1.4206-1.7516-1.9431-0.72566-0.51929-1.5561-0.93874-2.4853-1.2559-0.9324-0.31397-1.8867-0.58032-2.866-0.80221-0.94615-0.2219-1.8757-0.42722-2.7912-0.61701-0.91546-0.1905-1.73-0.40323-2.4405-0.63853-0.70943-0.23742-1.2834-0.54328-1.7258-0.92534-0.44345-0.37782-0.66217-0.86642-0.66217-1.4672 0-0.50518 0.12312-0.90734 0.37712-1.2079 0.2533-0.29845 0.56127-0.52811 0.92393-0.68756 0.36371-0.15664 0.76341-0.25859 1.2065-0.30763 0.44167-0.0466 0.85337-0.0688 1.2308-0.0688 1.2002 0 2.2419 0.22825 3.1274 0.6858 0.88124 0.45791 1.372 1.3342 1.4651 2.6278h6.3916c-0.1263-1.5145-0.51224-2.769-1.1599-3.7662-0.64593-0.99307-1.4601-1.7907-2.4377-2.3897-0.97684-0.60007-2.0902-1.0255-3.339-1.2788-1.2467-0.25294-2.5319-0.37782-3.8555-0.37782-1.3279 0-2.6229 0.11853-3.8823 0.35277-1.2651 0.23813-2.401 0.65017-3.4096 1.233-1.0114 0.58385-1.8228 1.3797-2.4398 2.3911-0.6163 1.01-0.92392 2.3061-0.92392 3.8834 0 1.0735 0.22295 1.983 0.66533 2.7242 0.4378 0.74295 1.0248 1.3561 1.748 1.8461 0.72813 0.48931 1.5572 0.88548 2.4878 1.1832 0.93098 0.30304 1.886 0.56162 2.8628 0.78352 2.4014 0.50588 4.2721 1.0093 5.6123 1.5162 1.3416 0.50412 2.0122 1.2615 2.0122 2.273 0 0.59972-0.14076 1.0943-0.42545 1.4898-0.28505 0.39687-0.63924 0.71049-1.065 0.94756-0.42863 0.23777-0.90241 0.41239-1.4206 0.52034-0.52105 0.11148-1.0195 0.16722-1.4926 0.16722-0.66287 0-1.3018-0.0797-1.9156-0.23707-0.61701-0.15804-1.1614-0.40322-1.6344-0.73483-0.47308-0.33091-0.86184-0.75636-1.161-1.2788-0.29775-0.52141-0.45085-1.1423-0.45085-1.8704h-6.3909c0.0646 1.6418 0.43427 3.0081 1.1148 4.0968 0.67557 1.0894 1.543 1.9646 2.6024 2.6289 1.0569 0.66181 2.2655 1.1366 3.6241 1.4217 1.355 0.28328 2.7443 0.42581 4.1624 0.42581 1.3896 0 2.7548-0.13547 4.0975-0.40146 1.3413-0.26917 2.5329-0.73519 3.5747-1.3995 1.0439-0.66181 1.8845-1.5378 2.5336-2.6278 0.64523-1.0908 0.96837-2.4402 0.96837-4.0506 0-1.1384-0.22049-2.0906-0.66216-2.8638m-27.79-21.099h-6.7243v7.3395h-4.07v4.4986h4.07v14.446c0 1.233 0.20743 2.2264 0.6163 2.9834 0.41099 0.75671 0.97049 1.3444 1.6799 1.7537 0.7105 0.41063 1.5318 0.6858 2.4631 0.82797 0.92851 0.14111 1.9191 0.21272 2.9584 0.21272 0.66534 0 1.342-0.0169 2.0376-0.0455 0.69286-0.0324 1.3236-0.0938 1.893-0.1912v-5.2102c-0.31679 0.0642-0.6477 0.1136-0.99589 0.14217-0.34608 0.0321-0.70944 0.049-1.0883 0.049-1.1352 0-1.8937-0.19121-2.2733-0.56974-0.37677-0.37782-0.56656-1.1359-0.56656-2.2736v-12.124h4.9241v-4.4986h-4.9241zm-19.27 22.351c0 0.38206-0.0385 0.88689-0.11854 1.5173-0.0783 0.63324-0.29174 1.2545-0.63852 1.8704-0.34749 0.6156-0.88583 1.1465-1.6097 1.5864-0.72566 0.44344-1.7515 0.66428-3.0787 0.66428-0.53516 0-1.0569-0.0473-1.5618-0.14393-0.50588-0.0931-0.9465-0.26035-1.3254-0.49636-0.37818-0.23671-0.6791-0.56056-0.90029-0.9712-0.21943-0.41028-0.33126-0.91369-0.33126-1.5134 0-0.63112 0.11183-1.1554 0.33126-1.5639 0.22119-0.40851 0.51364-0.7493 0.87736-1.0185 0.36124-0.26811 0.7881-0.48083 1.2774-0.64029 0.48895-0.15734 0.98531-0.28328 1.4919-0.37818 0.53517-0.0928 1.0732-0.17427 1.6083-0.23706 0.53869-0.0617 1.0509-0.14288 1.5392-0.23601 0.49072-0.0946 0.94686-0.21449 1.3741-0.35666 0.42616-0.14217 0.78-0.3369 1.0647-0.5909zm6.7225 4.027v-12.738c0-1.4862-0.32985-2.6769-0.99483-3.5754-0.66146-0.90064-1.5141-1.6023-2.5545-2.1078-1.0432-0.50482-2.196-0.8449-3.4579-1.0181-1.2619-0.17356-2.5093-0.25999-3.7394-0.25999-1.3564 0-2.7072 0.13299-4.0467 0.40216-1.3448 0.26811-2.5495 0.71896-3.6234 1.349-1.0735 0.63147-1.9597 1.4693-2.6501 2.51-0.69674 1.0418-1.0908 2.3523-1.185 3.9314h6.7222c0.12629-1.3268 0.57009-2.2747 1.3279-2.8423 0.75706-0.56867 1.7974-0.85125 3.1246-0.85125 0.59866 0 1.1582 0.0395 1.6803 0.11783 0.51964 0.0797 0.9779 0.2353 1.373 0.47343 0.39511 0.23671 0.71049 0.56726 0.94615 0.99483 0.23671 0.4258 0.35525 1.0033 0.35525 1.7276 0.0314 0.69674-0.17463 1.2224-0.61454 1.5861-0.44344 0.36513-1.0421 0.64206-1.7999 0.82903-0.75777 0.19121-1.626 0.33373-2.6049 0.42545-0.97896 0.0967-1.9724 0.22542-2.9813 0.381-1.0111 0.1584-2.0137 0.37112-3.0057 0.63959-0.99412 0.2667-1.8806 0.67133-2.6529 1.2058-0.77399 0.5394-1.4048 1.2566-1.8955 2.1569-0.48824 0.90029-0.73237 2.0458-0.73237 3.4332 0 1.2626 0.21273 2.3516 0.63888 3.2664 0.42581 0.91828 1.0174 1.6729 1.7759 2.2736 0.75812 0.60007 1.6411 1.0428 2.6511 1.3278 1.0086 0.28328 2.0983 0.42581 3.2674 0.42581 1.5148 0 2.999-0.2219 4.4485-0.66181 1.4527-0.44521 2.7167-1.216 3.7899-2.3227 0.0314 0.41028 0.0864 0.81421 0.16439 1.2079 0.079 0.39299 0.18239 0.78211 0.30868 1.1596h6.8185c-0.31538-0.50236-0.53798-1.2608-0.66287-2.273-0.12806-1.0096-0.19085-2.0655-0.19085-3.1736m-27.697-16.932c-0.66181-0.86854-1.5699-1.5462-2.7203-2.0369-1.1536-0.48683-2.6292-0.7313-4.4274-0.7313-1.2629 0-2.5566 0.32244-3.8837 0.97084-1.325 0.64558-2.4144 1.6806-3.266 3.1023h-0.14217v-12.741h-6.7232v33.814h6.7232v-12.834c0-2.4938 0.40993-4.2845 1.2312-5.3756 0.81986-1.088 2.1456-1.6334 3.9772-1.6334 1.609 0 2.7298 0.49707 3.3613 1.493 0.63147 0.99342 0.94686 2.5019 0.94686 4.5216v13.829h6.7236v-15.06c0-1.5145-0.13547-2.8952-0.40287-4.1448-0.26847-1.245-0.73413-2.3036-1.3977-3.1732m-35.508 11.865h-0.09349l-5.776-23.301h-6.96l-5.8716 23.017h-0.09419l-5.3502-23.017h-7.4323l8.9479 33.814h7.5286l5.6328-23.017h0.0949l5.7288 23.017h7.3861l9.0907-33.814h-7.2909z" fill="#fff"/><path d="m-25.319 172.29 1.0534 0.62442c4.4263 2.6268 9.501 4.016 14.676 4.0188h0.011289c15.893 0 28.828-12.932 28.834-28.826 0.0025-7.7029-2.9937-14.945-8.4377-20.394-5.4444-5.448-12.683-8.4504-20.386-8.4536-15.905 0-28.84 12.93-28.846 28.824-0.0021 5.4465 1.5215 10.751 4.4083 15.34l0.68615 1.0908-2.9136 10.637zm-19.243 11.101 4.9216-17.971c-3.0357-5.2596-4.6327-11.226-4.6302-17.338 0.0074-19.122 15.569-34.679 34.693-34.679 9.2798 4e-3 17.99 3.6156 24.54 10.171 6.5493 6.5553 10.155 15.269 10.152 24.536-0.0081 19.121-15.573 34.681-34.692 34.681-0.00141 0 7.056e-4 0 0 0h-0.014817c-5.806-2e-3 -11.511-1.4584-16.578-4.222z" fill="#fff"/><path d="m-43.075 148.1c-0.0021 5.8999 1.5395 11.66 4.4708 16.738l-4.7516 17.349 17.754-4.6553c4.8916 2.6656 10.399 4.0728 16.004 4.0746h0.014464c18.458 0 33.482-15.02 33.49-33.48 0.0035-8.9461-3.477-17.357-9.8005-23.686-6.3225-6.3281-14.731-9.815-23.691-9.8192-18.459 0-33.483 15.018-33.491 33.479m33.492 33.506h3.528e-4 -3.528e-4c-3.527e-4 0-7.055e-4 0 0 0" fill="url(#linearGradient2628)"/><path d="m-44.271 148.09c-0.0021 6.1119 1.5949 12.079 4.6306 17.338l-4.922 17.97 18.391-4.8221c5.0673 2.7633 10.772 4.2196 16.578 4.222h0.014817c19.119 0 34.684-15.56 34.692-34.681 0.0032-9.2675-3.6026-17.981-10.152-24.536-6.5504-6.555-15.26-10.167-24.54-10.171-19.123 0-34.685 15.557-34.693 34.679m10.952 16.433-0.68651-1.0904c-2.8868-4.5896-4.4104-9.894-4.4083-15.34 0.0063-15.893 12.941-28.824 28.846-28.824 7.7022 3e-3 14.941 3.0057 20.386 8.4536 5.4444 5.4483 8.4402 12.691 8.4381 20.393-0.007055 15.894-12.942 28.826-28.835 28.826h-0.011289c-5.1749-3e-3 -10.25-1.3921-14.676-4.0185l-1.0534-0.62442-10.914 2.8614zm23.741 18.276h3.527e-4 -3.527e-4c-3.528e-4 0-7.056e-4 0 0 0" fill="url(#linearGradient2630)"/><path d="m-18.249 133.59c-0.64946-1.4436-1.3328-1.4725-1.9505-1.4979-0.50553-0.0215-1.0837-0.0201-1.6612-0.0201-0.5782 0-1.5173 0.21696-2.3114 1.0844-0.79481 0.86748-3.0342 2.9644-3.0342 7.2291 0 4.2651 3.1066 8.3862 3.5394 8.9651 0.43356 0.57785 5.9969 9.6097 14.807 13.084 7.3226 2.8875 8.8127 2.3132 10.402 2.1685 1.5893-0.14429 5.1287-2.0962 5.8508-4.1204 0.72249-2.0239 0.72249-3.7588 0.50588-4.1211-0.21661-0.36125-0.79481-0.57821-1.6616-1.0114-0.86713-0.43356-5.1287-2.5308-5.9231-2.8201-0.79481-0.28893-1.3727-0.43322-1.9509 0.43462-0.57785 0.86677-2.238 2.8187-2.7439 3.3969-0.50553 0.57926-1.0114 0.65158-1.8782 0.21801-0.86713-0.43497-3.659-1.3494-6.9709-4.3021-2.577-2.2976-4.3166-5.135-4.8225-6.0029-0.50553-0.86677-0.05397-1.3363 0.38065-1.7685 0.38947-0.38841 0.86713-1.0121 1.3007-1.518 0.4325-0.50623 0.57679-0.86748 0.86572-1.4457 0.28928-0.57856 0.14464-1.0848-0.07197-1.5184-0.21696-0.43356-1.9015-4.7202-2.6723-6.4343" fill="#fff" fill-rule="evenodd"/></g></g></g></svg></div>'

var skill = document.getElementById("mycontainer-waclick").getAttribute("waclick-skill");
var templateID = document.getElementById("mycontainer-waclick").getAttribute("waclick-templateId");
var outboundNumber = document.getElementById("mycontainer-waclick").getAttribute("waclick-outboundNumber");
var proactivevariables = document.getElementById("mycontainer-waclick").getAttribute("waclick-proactivevariables");
proactivevariables = proactivevariables.split("_").join(" ");
  
  console.log("*********");
  console.log(proactivevariables);
  
// alert(siteId + " " + skill + " " + proactiveTemplate + " " + proactivevariables)
  
  
function callApi(){
  var internationalCode = document.getElementById("internationalCode").value;
  var number = document.getElementById("wa-number").value;
  if(internationalCode === "0"){
    alert("choose a valid international code, please");
    return
  }
  if(isNaN(number) || (number === "")){
    alert("insert a valid phone number, please");
    return
  }
  
  document.getElementsByClassName("div-click-wa")[0].style.opacity="0.2";
  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      document.getElementsByClassName("div-click-wa")[0].style.opacity="1";
      console.log(xhr.response);
      if (JSON.parse(xhr.response).state === "error"){
        alert("error --> " + JSON.parse(xhr.response).message)
      } else{
        alert("success")
      }
    }
  });
  var URLforPOST = "https://abc-auth.herokuapp.com/outboundWhatsapp";
  xhr.open("POST", URLforPOST);
  xhr.setRequestHeader("Content-Type", "application/json");

  var myBodyToSend = JSON.stringify({"internationalCode": internationalCode, "number": number, "skill": skill, "templateID": templateID, "outboundNumber": outboundNumber, "proactivevariables": proactivevariables});
  xhr.send(myBodyToSend);
  
  
  // alert(document.getElementById("internationalCode").value + document.getElementById("wa-number").value);
}



document.getElementById("wa-button").addEventListener("click", callApi);

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
  
}
