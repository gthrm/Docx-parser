var fs = require('fs');
var zip = new require('node-zip')();
var name_exp = 'Виноградова Екатерина Юрьевна';
/* читаем файлы архива в память */
var f01 = fs.readFileSync('doc/_rels/.rels');
var f02 = fs.readFileSync('doc/docProps/app.xml');
var f03 = fs.readFileSync('doc/docProps/core.xml');
var f04 = fs.readFileSync('doc/word/_rels/document.xml.rels');
var f05 = fs.readFileSync('doc/word/theme/theme1.xml');
var f06 = fs.readFileSync('doc/word/document.xml');
var f07 = fs.readFileSync('doc/word/fontTable.xml');
var f08 = fs.readFileSync('doc/word/numbering.xml');
var f09 = fs.readFileSync('doc/word/settings.xml');
var f10 = fs.readFileSync('doc/word/styles.xml');
var f11 = fs.readFileSync('doc/word/stylesWithEffects.xml');
var f12 = fs.readFileSync('doc/word/webSettings.xml');
var f13 = fs.readFileSync('doc/[Content_Types].xml');
/* тут все остальные файлы */

/* создаём zip-объект */
zip.file('_rels/.rels', f01);
zip.file('docProps/app.xml', f02);
zip.file('docProps/core.xml', f03);
zip.file('word/_rels/document.xml.rels', f04);
zip.file('word/theme/theme1.xml', f05);
zip.file('word/document.xml', f06);
zip.file('word/fontTable.xml', f07);
zip.file('word/numbering.xml', f08);
zip.file('word/settings.xml', f09);
zip.file('word/styles.xml', f10);
zip.file('word/stylesWithEffects.xml', f11);
zip.file('word/webSettings.xml', f12);
zip.file('[Content_Types].xml', f13);
/* тут все остальные файлы */

/* читаем задание в виде файла json: [ {"addr": 1, "numb": 4897656}, {"addr": 2, "numb": 5735967} ] */
task=JSON.parse(fs.readFileSync('task.json', {encoding: 'utf8'}));
console.log('task was readed');

/* замена поля на значение, и сохранение файла под нужным именем */
var write_record = function(filename, task_data, all)
{ 
    var body_1 = String(f06).replace("ИМЯ_ЭКСПЕРТА", ""+task_data.name_expert);
    var body_2 = String(body_1).replace("ШИФР_ПРОГРАММЫ", ""+task_data.num_prog);
    var body_3 = String(body_2).replace("НАИМЕНОВАНИЕ_ПРОГРАММЫ", ""+task_data.name_prog);
    var body_4 = String(body_3).replace("ЧИСЛО_СТУДЕНТОВ", ""+task_data.num_students);
    var body_5 = String(body_4).replace("ЧИСЛО_ПРОЦЕНТОВ", ""+task_data.num_procent);
    var body_6 = String(body_5).replace("ИМЯ_ЭКСПЕРТА", ""+task_data.name_expert);

    // Первый вопрос
    var body_X_1 = getNumberFor3();    

    var body_X_1_1 = String(body_6).replace("X_1_1", ""+ body_X_1.X1);
    var body_X_1_2 = String(body_X_1_1).replace("X_1_2", ""+ body_X_1.X2);
    var body_X_1_3 = String(body_X_1_2).replace("X_1_3", ""+ body_X_1.X3);

    // Второй вопрос

    var body_X_2 = getNumberFor3();    

    var body_X_2_1 = String(body_X_1_3).replace("X_2_1", ""+ body_X_2.X1);
    var body_X_2_2 = String(body_X_2_1).replace("X_2_2", ""+ body_X_2.X2);
    var body_X_2_3 = String(body_X_2_2).replace("X_2_3", ""+ body_X_2.X3);

    //Третий вопрос

    var body_X_3 = getNumberFor3();    

    var body_X_3_3 = String(body_X_2_3).replace("X_3_3", ""+ body_X_3.X3);
    var body_X_3_2 = String(body_X_3_3).replace("X_3_2", ""+ body_X_3.X2);
    var body_X_3_1 = String(body_X_3_2).replace("X_3_1", ""+ body_X_3.X1);

    //Четвертый вопрос
    //Не нужно

    //Пятый вопрос


    var body_X_5 = getNumberFor2();
    var body_X_5_2 = String(body_X_3_1).replace("X_5_2", ""+ body_X_5.X2);
    var body_X_5_1 = String(body_X_5_2).replace("X_5_1", ""+ body_X_5.X1);

    //Шестой вопрос

    var body_X_6 = getNumberFor3();    

    var body_X_6_3 = String(body_X_5_1).replace("X_6_3", ""+ body_X_6.X3);
    var body_X_6_2 = String(body_X_6_3).replace("X_6_2", ""+ body_X_6.X2);
    var body_X_6_1 = String(body_X_6_2).replace("X_6_1", ""+ body_X_6.X1);

    //Седбмой вопрос

    var body_X_7 = getNumberFor2();

    var body_X_7_1 = String(body_X_6_1).replace("X_7_1", ""+ body_X_7.X1);
    var body_X_7_2 = String(body_X_7_1).replace("X_7_2", ""+ body_X_7.X2);

    //Восьмой вопрос

    var body_X_8 = getNumberFor2();

    var body_X_8_1 = String(body_X_7_2).replace("X_8_1", ""+ body_X_8.X1);
    var body_X_8_2 = String(body_X_8_1).replace("X_8_2", ""+ body_X_8.X2);

    //Девятый вопрос

    var body_X_9 = getNumberFor3();    

    var body_X_9_3 = String(body_X_8_2).replace("X_9_3", ""+ body_X_9.X3);
    var body_X_9_2 = String(body_X_9_3).replace("X_9_2", ""+ body_X_9.X2);
    var body_X_9_1 = String(body_X_9_2).replace("X_9_1", ""+ body_X_9.X1);

    //Десятый вопрос

    var body_X_10 = getNumberFor3();    

    var body_X_10_1 = String(body_X_9_1).replace("X_10_1", ""+ body_X_10.X1);
    var body_X_10_2 = String(body_X_10_1).replace("X_10_2", ""+ body_X_10.X2);
    var body_X_10_3 = String(body_X_10_2).replace("X_10_3", ""+ body_X_10.X3);

    zip.file('word/document.xml', body_X_10_3); //, {mode: 0777}
    var data = zip.generate({base64:false,compression:'DEFLATE'});
    fs.writeFileSync("result/"+filename+".docx", data, 'binary');
}

function getNumberFor2() {    
    var X1 = Math.floor(100/Number(task[i].num_students)*randomInteger(Number(task[i].num_students)/2));
    var X2 = 100 - X1;
    console.log('X1: ', X1, '; X2: ', X2);
    return {X1, X2};
}

function getNumberFor3() {    
    var X1 = Math.floor(100/Number(task[i].num_students)*randomInteger(Number(task[i].num_students)/3));
    var X2 = Math.floor(100/Number(task[i].num_students)*randomInteger(Number(task[i].num_students)/3));
    var X3 = 100 - X1 - X2;
    console.log('X1: ', X1, '; X2: ', X2, '; X3: ', X3);
    return {X1, X2, X3};
}

function randomInteger(max) {
    let rand = 0 - 0.5 + Math.random() * (max - 0 + 1)
    rand = Math.round(rand);
    return rand;
  };

/* проходим циклом по заданию */
for(i=0; i<task.length; i++)
  write_record(task[i].addr, task[i], task.length);