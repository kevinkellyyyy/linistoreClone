import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const AppModalTerm = ({
  modalTermVisible,
  modalBody,
  modalFooter,
  title,
  setModalTermVisible,
}) => {
  return (
    <Modal
      visible={modalTermVisible}
      onRequestClose={() => setModalTermVisible(false)}
      transparent>
      <View style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setModalTermVisible(false);
                }}>
                <Icon size={20} type="evil" name="close" />
              </TouchableOpacity>
              <Text style={styles.title}>
                Ketentuan Penggunaan “Aplikasi LINISTORE”
              </Text>
              <View />
            </View>
            <View style={styles.headerSeparator} />

            <View style={styles.body}>
              <Text style={{textAlign: 'justify'}}>
                Semua produk layanan yang disediakan oleh PT Solusi Sinergi
                Digital (Selanjutnya akan disebut sebagai “Aplikasi LINISTORE”)
                telah berlisensi. Dengan demikian, pengguna Aplikasi LINISTORE
                berkewajiban untuk tunduk pada syarat {'&'} ketentuan ini. Jika
                pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi
                syarat {'&'} ketentuan, maka pengguna tidak diperkenankan
                menggunakan layanan Aplikasi LINISTORE.
                {'\n'}
                {'\n'}
                Dalam hal persyaratan perjanjian lisensi yang terpisah, Pengguna
                wajib mematuhi persyaratan terpisah yang telah diatur, termasuk
                semua hak dan kewajiban yang tidak secara eksplisit
                diberitahukan Pemberi Lisensi (“Penyedia Aplikasi”) kepada
                Pengguna.
                {'\n'}
                {'\n'}
                Aplikasi LINISTORE menyediakan layanan langganan khusus yang
                memungkinkan anggota kami untuk mengakses WiFi, integrasi ke
                Merchant Portal dan Admin Dashboard, maupun layanan-layanan yang
                akan dikembangkan Aplikasi LINISTORE kedepannya ("konten
                Aplikasi LINISTORE") yang diakses melalui Internet ke telepon
                gengganm, komputer, dan perangkat lain yang tersambung ke
                Internet ("perangkat yang mendukung Aplikasi LINISTORE").
                {'\n'}
                {'\n'}
                Ketentuan Penggunaan ini mengatur penggunaan layanan kami oleh
                Pengguna. Sebagaimana digunakan dalam Ketentuan Penggunaan,
                "layanan Aplikasi LINISTORE", "layanan kami", atau "layanan"
                berarti layanan khusus yang disediakan oleh Aplikasi LINISTORE
                untuk menemukan dan menonton konten Aplikasi LINISTORE, termasuk
                semua fitur dan fungsi, rekomendasi dan ulasan, situs web, dan
                antarmuka pengguna, serta semua konten dan perangkat lunak yang
                terkait dengan layanan kami.
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>1. Keanggotaan</Text>
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>1.1. </Text>
                Keanggotaan Aplikasi LINISTORE Pengguna akan terus berlanjut
                hingga dihentikan. Untuk menggunakan layanan Aplikasi LINISTORE,
                Pengguna harus memiliki akses Internet dan perangkat yang
                mendukung Aplikasi LINISTORE, serta memberi kami satu atau
                beberapa Metode Pembayaran. "Metode Pembayaran" adalah metode
                pembayaran aktif yang valid dan diterima, yang mungkin
                diperbarui dari waktu ke waktu, dan yang dapat mencakup
                pembayaran melalui akun Pengguna dengan pihak ketiga. Kecuali
                jika Pengguna membatalkan keanggotaan Pengguna sebelum tanggal
                penagihan, Pengguna mengizinkan kami untuk membebankan biaya
                keanggotaan Pengguna untuk siklus penagihan berikutnya pada
                Metode Pembayaran Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>1.2. </Text>
                Kami dapat menawarkan sejumlah paket keanggotaan, termasuk
                keanggotaan yang ditawarkan oleh pihak ketiga dalam kaitannya
                dengan penyediaan produk dan layanan mereka sendiri. Kami tidak
                bertanggung jawab atas produk dan layanan yang disediakan oleh
                pihak ketiga tersebut. Beberapa paket keanggotaan mungkin
                memiliki ketentuan dan batasan yang berbeda, yang akan
                disampaikan saat Pengguna mendaftar atau dalam komunikasi
                lainnya yang tersedia untuk Pengguna. Rincian khusus tentang
                keanggotaan Aplikasi LINISTORE Pengguna dapat Pengguna lihat
                dengan mengunjungi situs web kami dan mengklik link "Akun" yang
                tersedia di bagian atas halaman di bawah nama profil Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>2. Penawaran Promosi</Text>
                {'\n'}
                Kami dari waktu ke waktu dapat memberikan penawaran promosi,
                paket, atau keanggotaan khusus ("Penawaran"). Kelayakan
                Penawaran ditentukan oleh Aplikasi LINISTORE atas kebijakannya
                sendiri dan kami berhak membatalkan Penawaran dan menangguhkan
                akun Pengguna jika kami menetapkan bahwa Pengguna tidak memenuhi
                syarat. Anggota rumah tangga yang sudah memiliki atau baru saja
                memperoleh keanggotaan Aplikasi LINISTORE tidak memenuhi syarat
                untuk Penawaran awal tertentu. Untuk menentukan kelayakan
                Penawaran, kami dapat menggunakan informasi seperti ID
                perangkat, metode pembayaran, atau alamat email akun yang
                digunakan dengan keanggotaan Aplikasi LINISTORE yang sudah ada
                atau yang baru saja ada. Persyaratan kelayakan dan batasan serta
                ketentuan lainnya akan diungkapkan pada saat Pengguna mendaftar
                untuk Penawaran atau dalam komunikasi lainnya yang tersedia
                untuk Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  3. Penagihan dan Pembatalan
                </Text>
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3.1. </Text>
                Siklus Penagihan. Biaya keanggotaan untuk layanan Aplikasi
                LINISTORE dan tagihan lain yang mungkin Pengguna tanggung
                sehubungan dengan penggunaan layanan oleh Pengguna, misalnya
                pajak dan kemungkinan biaya transaksi, akan dibebankan pada
                Metode Pembayaran Pengguna pada tanggal pembayaran tertentu yang
                ditunjukkan pada halaman "Akun". Durasi siklus penagihan
                Pengguna akan bergantung pada jenis langganan yang Pengguna
                pilih saat mendaftar untuk layanan tersebut. Dalam beberapa
                kasus, tanggal pembayaran Pengguna dapat berubah, misalnya jika
                Metode Pembayaran Pengguna tidak berhasil diselesaikan, pada
                saat Pengguna mengubah paket berlangganan, atau jika keanggotaan
                berbayar Pengguna dimulai pada hari yang tidak termasuk dalam
                suatu bulan tertentu. Kunjungi situs web kami, lalu klik link
                "Detail tagihan" pada halaman "Akun" untuk melihat tanggal
                pembayaran Pengguna berikutnya. Kami dapat mengesahkan Metode
                Pembayaran Pengguna untuk mengantisipasi biaya terkait layanan
                atau keanggotaan melalui berbagai metode, termasuk
                mengesahkannya hingga selama sekitar satu bulan layanan segera
                setelah Pengguna mendaftar. Jika Pengguna mendaftar untuk
                Aplikasi LINISTORE menggunakan akun Pengguna dengan pihak ketiga
                sebagai Metode Pembayaran, Pengguna dapat menemukan informasi
                penagihan tentang keanggotaan Aplikasi LINISTORE Pengguna dengan
                mengunjungi akun Pengguna pada pihak ketiga yang terkait.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3.2. </Text>
                Metode Pembayaran. Untuk menggunakan layanan Aplikasi LINISTORE,
                Pengguna harus memberikan satu atau beberapa Metode Pembayaran.
                Pengguna mengizinkan kami untuk membebankan tagihan ke setiap
                Metode Pembayaran yang terkait akun Pengguna jika Metode
                Pembayaran utama Pengguna ditolak atau tidak lagi tersedia bagi
                kami untuk pembayaran biaya langganan Pengguna. Pengguna tetap
                bertanggung jawab atas setiap jumlah yang belum ditagih. Jika
                pembayaran tidak berhasil diselesaikan, karena kedaluwarsa,
                tidak cukup dana, atau hal lainnya, dan Pengguna tidak
                membatalkan akun Pengguna, maka kami dapat menangguhkan akses
                Pengguna ke layanan kami hingga kami berhasil membebankan
                tagihan pada Metode Pembayaran yang valid. Untuk beberapa Metode
                Pembayaran, penerbit dapat mengenakan biaya tertentu kepada
                Pengguna, seperti biaya transaksi asing atau biaya lainnya yang
                terkait dengan pemrosesan Metode Pembayaran Pengguna. Biaya
                pajak setempat dapat beragam, tergantung pada Metode Pembayaran
                yang digunakan. Untuk informasi selengkapnya, hubungi penyedia
                layanan Metode Pembayaran Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3.3.</Text>
                Memperbarui Metode Pembayaran. Pengguna dapat memperbarui Metode
                Pembayaran Pengguna dengan membuka halaman "Akun". Kami juga
                dapat memperbarui Metode Pembayaran Pengguna dengan menggunakan
                informasi yang disediakan oleh penyedia jasa pembayaran. Setelah
                setiap pembaruan, Pengguna mengizinkan kami untuk terus
                membebankan tagihan pada Metode(-Metode) Pembayaran yang
                berlaku.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3.4. </Text>
                Pembatalan. Pengguna dapat membatalkan keanggotaan Aplikasi
                LINISTORE Pengguna kapan pun, dan akan terus memiliki akses ke
                layanan Aplikasi LINISTORE hingga akhir periode penagihan
                Pengguna. Sejauh yang diizinkan oleh hukum yang berlaku,
                pembayaran tidak dapat dikembalikan dan kami tidak memberikan
                pengembalian uang atau kredit untuk setiap periode keanggotaan
                parsial atau konten Aplikasi LINISTORE yang belum diakses. Untuk
                membatalkan, buka halaman "Akun" dan ikuti petunjuk untuk
                pembatalan. Jika Pengguna membatalkan keanggotaan Pengguna, akun
                Pengguna akan secara otomatis ditutup pada akhir periode
                penagihan Pengguna saat ini. Untuk mengetahui kapan akun
                Pengguna akan ditutup, klik "Detail tagihan" pada halaman
                "Akun". Jika Pengguna mendaftar untuk Aplikasi LINISTORE
                menggunakan akun Pengguna dengan pihak ketiga sebagai Metode
                Pembayaran dan ingin membatalkan keanggotaan Aplikasi LINISTORE
                Pengguna, Pengguna mungkin harus melakukannya melalui pihak
                ketiga tersebut, misalnya dengan mengunjungi akun Pengguna
                dengan pihak ketiga yang terkait dan menonaktifkan perpanjangan
                otomatis, atau berhenti berlangganan dari layanan Aplikasi
                LINISTORE melalui pihak ketiga tersebut.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3.5. </Text>
                Perubahan Harga dan Paket Berlangganan. Kami dapat mengubah
                paket berlangganan kami dan harga layanan kami dari waktu ke
                waktu; namun, setiap perubahan harga atau perubahan terhadap
                paket berlangganan Pengguna akan berlaku paling cepat 30 hari
                setelah pemberitahuan kepada Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  4. Layanan Aplikasi LINISTORE
                </Text>
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.1. </Text>
                Untuk menjadi anggota layanan Aplikasi LINISTORE, Pengguna harus
                berusia setidaknya 18 tahun, atau usia dewasa yang berlaku di
                provinsi, wilayah, atau negara Pengguna. Anak di bawah umur
                hanya dapat menggunakan layanan di bawah pengawasan orang
                dewasa.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.2. </Text>
                Layanan Aplikasi LINISTORE dan konten apa pun yang dilihat
                melalui layanan tersebut ditujukan hanya untuk penggunaan
                bersifat pribadi dan non-komersial oleh Pengguna dan tidak dapat
                digunakan bersama orang-orang di luar rumah tangga Pengguna.
                Selama keanggotaan Aplikasi LINISTORE Pengguna, kami memberi
                Pengguna suatu hak yang terbatas, non-eksklusif, dan tidak dapat
                dialihkan untuk mengakses layanan Aplikasi LINISTORE dan melihat
                konten Aplikasi LINISTORE. Kecuali untuk hal-hal tersebut di
                atas, tidak ada hak, alas hak, atau kepentingan yang akan
                dialihkan kepada Pengguna. Pengguna setuju untuk tidak
                menggunakan layanan untuk pertunjukan umum.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.3. </Text>
                Layanan Aplikasi LINISTORE diperbarui secara teratur. Selain
                itu, kami terus menguji berbagai aspek layanan kami, termasuk
                situs web kami, antarmuka pengguna, fitur promosi, dan
                ketersediaan konten Aplikasi LINISTORE. Pengguna dapat
                menonaktifkan partisipasi pengujian pada setiap saat dengan
                mengunjungi halaman "Akun" dan mengubah pengaturan "Partisipasi
                pengujian".
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.4. </Text>
                Pengguna setuju untuk menggunakan layanan Aplikasi LINISTORE,
                termasuk semua fitur dan fungsi terkaitnya, sesuai dengan semua
                hukum, aturan, dan peraturan yang berlaku, atau pembatasan
                lainnya tentang penggunaan layanan atau konten di dalamnya.
                Pengguna setuju untuk tidak membuat arsip, memperbanyak,
                mendistribusikan, memodifikasi, menampilkan, mempertunjukkan,
                mempublikasikan, memberikan lisensi, membuat karya turunan dari,
                menawarkan untuk menjual, atau menggunakan (kecuali sebagaimana
                secara tegas diizinkan dalam Ketentuan Penggunaan ini) konten
                dan informasi yang terdapat pada atau diperoleh dari atau
                melalui layanan Aplikasi LINISTORE. Pengguna juga setuju untuk
                tidak: menghentikan, menghapus, mengubah, menonaktifkan,
                menurunkan, atau menggagalkan perlindungan konten dalam layanan
                Aplikasi LINISTORE; menggunakan robot, spider, pengikis, atau
                program otomatis lainnya untuk mengakses layanan Aplikasi
                LINISTORE; merombak, merekayasa balik, atau membongkar perangkat
                lunak apa pun atau produk atau proses lain yang dapat diakses
                melalui layanan Aplikasi LINISTORE; memasukkan kode atau produk
                apa pun atau memanipulasi konten layanan Aplikasi LINISTORE
                dengan cara apa pun; atau menggunakan penggalian data,
                pengumpulan data, atau metode ekstraksi apa pun. Selain itu,
                Pengguna setuju untuk tidak meng-upload, mem-posting, mengirim
                email, atau mengirim atau melakukan transmisi materi apa pun
                yang dirancang untuk mengganggu, merusak, atau membatasi fungsi
                dari perangkat lunak atau perangkat keras komputer atau
                peralatan telekomunikasi yang terkait dengan layanan Aplikasi
                LINISTORE, termasuk virus perangkat lunak atau kode komputer,
                file, atau program apa pun lainnya. Kami dapat menghentikan atau
                membatasi penggunaan layanan oleh Pengguna jika Pengguna
                melanggar Ketentuan Penggunaan ini, atau jika Pengguna terlibat
                dalam penggunaan layanan yang ilegal atau curang.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.5. </Text>
                Kualitas tampilan konten Aplikasi LINISTORE mungkin berbeda di
                setiap perangkat, dan dapat dipengaruhi oleh berbagai faktor,
                seperti lokasi Pengguna dan/atau kemampuan perangkat Pengguna
                pada saat mengakses Internet serta konfigurasi perangkat
                Pengguna yang mendukung Aplikasi LINISTORE.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4.6. </Text>
                Perangkat lunak Aplikasi LINISTORE dikembangkan oleh, atau
                untuk, Aplikasi LINISTORE dan hanya dapat digunakan untuk
                menjalankan konten Aplikasi LINISTORE secara sah melalui
                perangkat yang mendukung Aplikasi LINISTORE. Perangkat lunak ini
                mungkin bervariasi menurut perangkat dan media, dan fungsi dan
                fitur juga dapat berbeda di antara perangkat. Pengguna mengakui
                bahwa penggunaan layanan mungkin memerlukan perangkat lunak
                pihak ketiga yang diatur berdasarkan lisensi pihak ketiga.
                Pengguna setuju bahwa Pengguna dapat secara otomatis menerima
                perangkat lunak Aplikasi LINISTORE versi yang diperbarui dan
                perangkat lunak pihak ketiga terkait.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  5. Sandi dan Akses Akun
                </Text>
                {'\n'}
                Anggota yang membuat akun Aplikasi LINISTORE dan yang Metode
                Pembayarannya dikenakan biaya ("Pemilik Akun") bertanggung jawab
                atas aktivitas apa pun yang terjadi melalui akun Aplikasi
                LINISTORE. Untuk mempertahankan kontrol atas akun dan untuk
                mencegah siapa pun mengakses akun (yang akan mencakup informasi
                tentang riwayat menonton untuk akun tersebut), Pemilik Akun
                harus mempertahankan kontrol atas perangkat yang mendukung
                Aplikasi LINISTORE yang digunakan untuk mengakses layanan dan
                tidak mengungkapkan sandi atau rincian tentang Metode Pembayaran
                yang terkait dengan akun tersebut kepada siapa pun. Pengguna
                bertanggung jawab untuk memperbarui dan menjaga keakuratan
                informasi yang Pengguna berikan kepada kami terkait dengan akun
                Pengguna. Kami dapat menghentikan akun Pengguna atau
                menangguhkan akun Pengguna untuk melindungi Pengguna, Aplikasi
                LINISTORE, atau mitra kami dari aktivitas pencurian identitas
                atau aktivitas penipuan lainnya.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>
                  6. Jaminan dan Batasan Tanggung Jawab
                </Text>
                {'\n'}
                Layanan Aplikasi LINISTORE diberikan "sebagaimana adanya" dan
                tanpa jaminan atau ketentuan apa pun. Secara khusus, layanan
                kami mungkin mengalami gangguan atau kesalahan. Pengguna
                membebaskan kami dari semua tanggung jawab atas kerugian khusus,
                tidak langsung, dan konsekuensial. Ketentuan ini tidak akan
                membatasi jaminan yang tidak dapat dilepaskan atau hak
                perlindungan konsumen yang mungkin berhak Pengguna terima
                menurut hukum wajib yang berlaku di negara tempat tinggal
                Pengguna.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7. Lain-Lain</Text>
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.1.</Text>
                Hukum yang Mengatur. Ketentuan Penggunaan ini akan diatur oleh
                dan ditafsirkan sesuai dengan hukum yang berlaku di Republik
                Indonesia.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.2. </Text>
                Materi yang Tidak Diminta. Aplikasi LINISTORE tidak menerima
                materi atau ide yang tidak diminta untuk konten Aplikasi
                LINISTORE dan tidak bertanggung jawab atas kemiripan semua
                konten atau pemrogramannya dalam media apa pun dengan materi
                atau ide yang dikirim ke Aplikasi LINISTORE.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.3. </Text>
                Dukungan Pelanggan. Untuk menemukan informasi lebih lanjut
                tentang layanan kami dan fiturnya atau jika Pengguna memerlukan
                bantuan untuk akun Pengguna, kunjungi Pusat Bantuan Aplikasi
                LINISTORE di situs web kami. Dalam kasus tertentu, Layanan
                Pelanggan mungkin dapat menjadi cara terbaik untuk membantu
                Pengguna dengan menggunakan alat dukungan akses jarak jauh yang
                melalui alat tersebut kami memiliki akses penuh ke komputer
                Pengguna. Jika Pengguna tidak ingin kami memiliki akses ini,
                Pengguna harus menolak memberikan persetujuan atas dukungan
                melalui alat akses jarak jauh tersebut, dan kami akan membantu
                Pengguna dengan cara lain. Jika terdapat pertentangan antara
                Ketentuan Penggunaan ini dan informasi yang disediakan oleh
                Dukungan Pelanggan atau bagian lain dari situs web kami,
                Ketentuan Penggunaan ini akan diutamakan.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.4. </Text>
                Kelangsungan Hukum. Jika ketentuan apa pun atau semua ketentuan
                dalam Ketentuan Penggunaan ini akan dianggap tidak berlaku,
                ilegal, atau tidak dapat diterapkan secara hukum, maka
                validitas, legalitas, dan penerapan secara hukum dari ketentuan
                lainnya akan tetap memiliki kekuatan hukum dan berlaku penuh.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.5. </Text>
                Perubahan terhadap Ketentuan Penggunaan dan Pengalihan. Aplikasi
                LINISTORE dapat, dari waktu ke waktu, melakukan perubahan
                terhadap Ketentuan Penggunaan ini. Kami akan memberi tahu
                Pengguna setidaknya 30 hari sebelum perubahan tersebut berlaku
                untuk Pengguna. Kami dapat setiap saat mengalihkan atau
                menyerahkan perjanjian kami dengan Pengguna, termasuk hak dan
                kewajiban kami yang terkait, dan Pengguna setuju untuk bekerja
                sama dengan kami dalam kaitannya dengan pengalihan atau
                penyerahan tersebut.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.6. </Text>
                Komunikasi Elektronik. Kami akan mengirimkan kepada Pengguna
                informasi yang terkait dengan akun Pengguna (misalnya,
                pengesahan pembayaran, faktur, perubahan sandi atau Metode
                Pembayaran, pesan konfirmasi, pemberitahuan) hanya dalam bentuk
                elektronik, misalnya melalui email ke alamat email yang
                diberikan saat pendaftaran.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.7. </Text>
                Aktivitas yang Dilarang. Pengguna tidak dapat dengan cara apa
                pun, menghapus, mengubah, melakukan bypass, menghindari,
                mengganggu, melanggar, atau mengelakan setiap paten, rahasia
                dagang; hak cipta, merek dagang atau pemberitahuan kepemilikan
                lain yang ditandai pada Aplikasi LINISTORE dan/atau Konten atau
                mekanisme pengelolaan digital atau perangkat apa pun, segala
                perlindungan konten atau cara pengendalian akses yang
                terasosiasi dengan Aplikasi LINISTORE dan/atau Konten, termasuk
                mekanisme filter geografis; atau setiap privasi, publisitas,
                atau hak kepemilikan lain serta tidak dapat menyalin, mengunduh,
                menyaksikan (stream), menangkap, memperbanyak, menggandakan,
                menyimpan, mengunggah, mengubah, menerjemahkan, mempublikasikan,
                menyiarkan, mengirim, mengirim ulang, mendistribusikan,
                mempertunjukkan, menampilkan, menjual,
                membuat frame atau deep-link, menyediakan, atau menggunakan
                Konten apa pun.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>7.8. </Text>
                Platform, Layanan, dan Iklan. Platform dan/atau Layanan Pihak
                Ketiga. Aplikasi LINISTORE dapat mengintegrasi, diintegrasikan
                ke dalam, disatukan dengan, atau disediakan sehubungan dengan
                situs web, layanan, aplikasi, dan/atau platform pihak ketiga.
                Disney tidak mengendalikan pihak ketiga tersebut atau produk
                yang disediakannya. Anda harus membaca perjanjian ketentuan
                penggunaan dan kebijakan privasi yang berlaku untuk produk pihak
                ketiga tersebut atau layanan termasuk layanan pembayaran.
                Apabila Anda mengakses Aplikasi LINISTORE menggunakan perangkat
                Apple iOS, Android atau perangkat yang menggunakan Microsoft
                Windows atau perangkat yang serupa atau Apple Inc., Google,
                Inc., Microsoft Corporation atau organisasi terkait lainnya,
                masing-masing, akan menjadi penerima manfaat pihak ketiga dari
                kontrak ini. Namun, penerima manfaat pihak ketiga ini bukan
                merupakan pihak dalam kontrak ini. Anda setuju bahwa akses Anda
                ke Aplikasi LINISTORE menggunakan perangkat ini juga harus
                tunduk pada ketentuan penggunaan yang ditetapkan dalam
                persyaratan layanan penerima pihak ketiga yang berlaku. Pengguna
                menyatakan bahwa telah membaca dan menyetujui persyaratan
                tersebut.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AppModalTerm;
