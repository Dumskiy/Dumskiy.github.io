const ATTRIBUTE_NOTICE="data-quantity-notice",CLASS_NOTICE=".user-list__quantity-notice",fillNotice=()=>{const t=document.querySelector(CLASS_NOTICE),e=Number(t.getAttribute(ATTRIBUTE_NOTICE));t.innerHTML=e>99?"99+":e,resizeElement(t,e)},resizeElement=(t,e)=>{e>9&&e<100?setMetrics(t,23):e>99&&setMetrics(t,25)},setMetrics=(t,e)=>{t.style.width=`${e}px`,t.style.height=`${e}px`};export const initFillNotice=()=>{fillNotice()};