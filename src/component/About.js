import React, {Component} from 'react';
import '../index.css';

class About extends Component {

    render (){
        return (<div className='content-about'>
                    <h1>Tentang Sajak Senja</h1>
                    <div id='rounded-line-green'/>
                    <p className='p'>Sajak Senja adalah aplikasi yang bertujuan untuk menampung karya-karya sajak berupa puisi, pantun, sajak singkat, ataupun sajak lainnya. Dibuat atas dasar kecintaan pada sastra dan keinginan untuk saling terhubung dengan para pecinta sastra lain di luar sana. Ingin saling bertukar tulisan dan terdokumentasi dengan baik, sehingga ketika ingin membaca kembali dengan mudah bisa dilakukan.</p>
                    <p className='p'>Sajak Senja tidak dibangun oleh tim developer melainkan oleh rekan-rekan kontributor dan para penikmat sajak lainnya. Berkat dukungan, kritik, dan saran dari rekan-rekan semualah yang dapat membangun Sajak Senja ini agar lebih bermanfaat dalam dunia seni menulis.</p>
                    <p className='p'>Beberapa fitur utama yang kami hadirkan adalah sebagai berikut:</p>
                    <p className='p'><b>1. Menulis Sajak</b></p>
                    <p className='p'>
                        Fitur ini ditujukan kepada kontributor yang ingin menyumbang karya berupa tulisan ke Aplikasi Sajak Senja. Setiap karya yang dikirim ke Sajak Senja sepenuhnya adalah hak Kontributor dan Sajak Senja tidak akan mengklaim sebagai hak milik. Fitur ini murni kami hadirkan untuk rekan-rekan yang ingin mengabadikan tulisannya dan dapat dibaca oleh banyak penikmat sajak di luar sana. Kami selalu memantau setiap sajak yang ditulis dan akan menindak orang-orang yang tidak menyajikan karya dengan cara sopan (seperti menulis status-status galau, melakukan provokasi, dan hal-hal lain yang menyebabkan pertentangan).
                    </p>
                    <p className='p'><b>2. Membaca sajak</b></p>
                    <p className='p'>
                        Fitur ini ditujukan kepada para menikmat sajak yang berminat dalam membaca karya-karya, dan tidak sedikit dari mereka mulai menulis karya dan menjadi kontributor di Sajak Senja. Tentu saja kami tidak membatasi minat baca rekan-rekan semua dan tidak membatasi kontribusi rekan-rekan dalam membangun Sajak Senja. Namun kami dengan tegas akan memproses setiap orang yang melakukan pelanggaran sebagai pembaca.
                    </p>
                    <p className='p'><b>3. Diskusi Sajak</b></p>
                    <p className='p'>
                        Fitur ini kami sediakan untuk kita saling bertukar pikiran dan berdiskusi sesama kontributor sajak, dimaka kita dapat berkomentar pada sajak yang telah diterbitkan oleh penulis. Disana kita dapat berdiskusi tentang cerita, nilai, atau tata penulisan. Kami akan berusaha menjaga agar komentar yang dibuat tidak mengandung unsur-unsur sara dan menjatuhkan. Kritik sangat boleh, namun sesuai dengan etika yang baik dan benar.
                    </p>
                    <p className='p'><b>4. Ngobrol Bareng Kontributor</b></p>
                    <p className='p'>
                        Fitur ini kami sediakan untuk rekan-rekan pecinta sajak untuk bisa berkomunikasi secara pribadi dengan kontributor favorit mereka, hal ini juga dapat digunakan untuk request sajak dan yang lainnya. Kami menjaga diskusi Anda dengan baik, namun kami sangat tidak menyarankan untuk berkomunikasi hal-hal yang sifatnya sensitif seperti informasi rekening dan informasi pribadi lainnya. Setiap penipuan yang terjadi tidak menjadi tanggung jawab kami.
                    </p>
                    <p className='p'><b>5. Diikuti &amp; Mengikuti</b></p>
                    <p className='p'>
                        Fitur ini kami sediakan untuk meningkatkan komunikasi dengan kontributor favorit Anda. Anda dapat mendapatkan informasi aktivitas dari kontributor yang Anda ikuti dan Anda juga dapat dengan mudah melihat karya-karyanya. Fitur ini baru dapat digunakan untuk mengikuti kontributor Sajak, jika Anda ingin memiliki pengikut maka bergabunglah menjadi kontributor di Sajak Senja.
                    </p>
                    <p className='p'><b>6. Event Sajak</b></p>
                    <p className='p'>
                        Fitur ini kami hadirkan untuk rekan-rekan baik yang menjadi kontributor ataupun yang menjadi penulis untuk Anda dapat mengikuti event-event sajak yang kami hadirkan. Event yang kami hadirkan diantaranya adalah event menulis sajak, event menganalisa sajak, dan event mengomentari penulisan sajak. Hadiah yang diberikan juga bervariasi dan waktu pelaksanaan bisa tiap bulan, tiap minggu, atau pada hari-hari istimewa seperti hari raya, hari membaca, hari pendidikan, dan lain-lain.
                    </p>
                    <p className='p'><b>7. Poin Sajak</b></p>
                    <p className='p'>
                        Fitur ini akan kami hadirkan untuk rekan-rekan kontributor sebagai loyalty karena telah berkontribusi di Sajak Senja, untuk rekan-rekan yang sudah menulis puisi tentu saja akan di kalkulasikan berdasarkan jumlah puisi yang telah diterbitkan di Sajak Senja. Poin ini juga dapat diperoleh dari event, atau misi yang diberikan oleh tim Sajak Senja.
                    </p>
                    <p className='p'><b>8. Toko Sajak</b></p>
                    <p className='p'>
                        Fitur ini akan kami hadirkan untuk rekan-rekan kontributor yang telah memiliki poin atau rekan-rekan yang ingin membeli merchandise menggunakan poin sajak atau pesan melalui transfer. Pembelian melalui Aplikasi Sajak Senja adalah salah satu bentuk dukungan dari rekan-rekan untuk mengembangkan Sajak Senja.
                    </p>
                    <p className='p'>
                        Kami menyadari bahwa aplikasi ini tidak luput dari kekurangan dan kesalahan, sehingga kami menyediakan layanan pertanyaan untuk rekan-rekan semua sehingga dapat memberikan kritik dan saran agar Sajak Senja dapat menjadi Aplikasi yang lebih baik lagi.
                    </p>

                </div>)
    }
}

export default About;