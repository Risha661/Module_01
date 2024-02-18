'use strict';
// Здесь 2-я усложненная задача, ошибка в названии файла просто
'use strict';
const profit2 = prompt ('Укажите свой доход');
if (profit2 <= 15000) {
    console.log(profit * 0.13);
} else if (profit2 > 15000 && profit2 <= 50000) {
    console.log((profit2 - 15000) * 0.2);
} else if (profit2 > 50000) {
    console.log((profit2 - 50000) * 0.3);
}
