import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import Unorderedlist from 'react-native-unordered-list';

const AppModalPrivacy = ({
  modalPrivacyVisible,
  modalBody,
  modalFooter,
  title,
  setModalPrivacyVisible,
}) => {
  return (
    <Modal
      visible={modalPrivacyVisible}
      onRequestClose={() => setModalPrivacyVisible(false)}
      transparent>
      <View style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setModalPrivacyVisible(false);
                }}>
                <Icon size={20} type="evil" name="close" />
              </TouchableOpacity>
              <Text style={styles.title}>Kebijakan Privasi</Text>
              <View />
            </View>
            <View style={styles.headerSeparator} />

            <View style={styles.body}>
              <Text style={{textAlign: 'justify'}}>
                LINISTORE berkomitmen untuk melindungi dan menghormati privasi
                dan informasi pribadi pengguna. Kebijakan ini menjelaskan
                bagaimana kami dapat mengumpulkan dan menggunakan informasi
                pribadi dan pilihan yang tersedia bagi pengunjung dan pengguna
                kami mengenai informasi tersebut. Kami menyarankan anda untuk
                membaca kebijakan ini dan memahami sepenuhnya serta menyetujui
                kebijakan ini sebelum menggunakan salah satu layanan kami
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  PERSETUJUAN ANDA
                </Text>
                {'\n'}
                Kebijakan privasi ini ("Kebijakan Privasi") menjelaskan
                interaksi antara PT Solusi Sinergi Digital ("LINISTORE" atau
                "kami") dengan semua pengunjung tidak terdaftar yang menggunakan
                layanan LINISTORE ("Pengunjung") dan pengguna terdaftar
                ("Pengguna LINISTORE"). Kebijakan ini menjelaskan bagaimana kami
                dapat mengumpulkan dan menggunakan informasi yang berkaitan
                dengan masing-masing Pengunjung dan Pengguna LINISTORE kami di
                semua layanan kami, termasuk, namun tidak terbatas pada, situs
                linistore.id (linistore.id dan semua subdomainnya, disebut
                sebagai "LINISTORE Situs web") dan semua layanan LINISTORE
                lainnya (Secara kolektif disebut sebagai "Layanan LINISTORE").
                {'\n'}
                {'\n'}
                Kebijakan Privasi ini merupakan kontrak hukum yang mengikat dan
                dapat dilaksanakan antara LINISTORE dan Anda, jadi harap baca
                dengan cermat. Anda dapat menggunakan Layanan LINISTORE hanya
                jika Anda sepenuhnya setuju dengan Kebijakan Privasi ini - dan
                dengan mengakses dan / atau menggunakan salah satu layanan kami,
                Anda menunjukkan dan menegaskan persetujuan Anda atas Kebijakan
                Privasi ini, termasuk untuk mengumpulkan dan memproses semua
                informasi pribadi Anda seperti yang dijelaskan di bawah ini.
                {'\n'}
                {'\n'}
                *Harap diperhatikan: Anda tidak diwajibkan oleh hukum untuk
                memberi kami informasi apa pun. Oleh karena itu, Anda dengan ini
                mengakui, menjamin, dan menyetujui bahwa informasi apa pun yang
                Anda berikan kepada kami disediakan atas keinginan dan
                persetujuan Anda sendiri tanpa paksaan.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  HAK CIPTA LINISTORE, HAK CIPTA DILINDUNGI UNDANG-UNDANG
                </Text>
                {'\n'}
                Semua hak cipta dan semua hak kekayaan intelektual dalam bentuk,
                kalimat, gambar, suara, perangkat lunak dan material lainnya
                yang terdapat pada situs ini dan halaman-halaman pada layer
                tampilannya, serta dalam informasi dan materi di dalamnya,
                dimiliki oleh LINISTORE dan perusahaan afiliasinya atau termasuk
                ijin dari pemilik yang bersangkutan. Referansi pada afiliasi
                atau perusahaan afiliasi adalah termasuk semua perusahaan yang
                berafiliasi dengan PT Solusi Sinergi Digital. Tidak ada yang
                terkandung di situs ini dan/atau aplikasi di dalamnya yang dapat
                dianggap sebagai pemberian lisensi atau hak untuk menggunakan
                hak cipta dan semua hak kekayaan intelektual yang ditampilkan di
                dalam situs ini. Penggunaan dan/atau penyalahgunaan seperti yang
                disebutkan dalam situs ini adalah terlarang sama sekali, kecuali
                dinyatakan dalam syarat dan ketentuan ini. Anda juga diingatkan
                bahwa LINISTORE akan melaksanakan hak yang dimilikinya atas hak
                kekayaan intelektualnya sepanjang yang diberikan oleh hukum.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  INFORMASI YANG DIKUMPULKAN
                </Text>
                {'\n'}
                Kami mengumpulkan dua jenis informasi dari Pengunjung dan
                Pengguna LINISTORE kami: Informasi yang tidak teridentifikasi
                dan tidak dapat diidentifikasi yang berkaitan dengan pengunjung
                dan pengguna LINISTORE, yang mungkin tersedia untuk kami.
                Informasi tersebut tidak memungkinkan kami untuk
                mengidentifikasi Anda, tetapi mungkin berisi informasi teknis,
                seperti aktivitas penelusuran, perangkat, sistem operasi,
                browser, resolusi layar, bahasa, penyedia layanan internet,
                situs web rujukan, stempel tanggal / waktu, dll.
                {'\n'}
                {'\n'}
                Informasi yang dapat diidentifikasi, yaitu informasi yang
                mengidentifikasi individu atau mungkin dengan upaya yang wajar
                menyebabkan identifikasi individu ("Informasi Pribadi").
                Informasi pribadi yang dikumpulkan oleh LINISTORE terutama
                terdiri dari perincian kontak (misalnya, alamat email / nomor
                telepon), rincian penagihan (nama, alamat), perincian mengenai
                sesi penelusuran atau penggunaan (alamat IP, geolokasi, dan /
                atau pengenal unik perangkat), rincian terkait akun pihak ketiga
                yang terhubung (akun Facebook / Google yang terhubung), dan
                informasi pribadi lainnya yang diberikan kepada kami saat
                mengakses atau menggunakan Layanan LINISTORE. Untuk menghindari
                keraguan, informasi non-pribadi apapun yang terhubung atau
                ditautkan ke informasi pribadi dianggap dan diperlakukan oleh
                kami sebagai informasi pribadi, selama koneksi tersebut ada.
                Lebih lanjut, LINISTORE juga dapat mengumpulkan informasi dari
                pengunjung situs web pengguna LINISTORE ("Pengunjung Situs Web")
                dan juga pelamar kerja baik itu dikirim melalui email atau surat
                pos.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  METODE PENGUMPULAN
                </Text>
                {'\n'}
                Ada dua metode utama untuk mengumpulkan informasi Anda,
                termasuk, tetapi tidak terbatas pada:
                {'\n'}
                Kami mengumpulkan informasi melalui penggunaan Layanan LINISTORE
                Anda. Dengan kata lain, saat Anda mengunjungi atau menggunakan
                layanan kami, termasuk, namun tidak terbatas pada, saat Anda
                mengkases aplikasi LINISTORE, menjelajahi situs web atau situs
                web pengguna LINISTORE, mendaftar ke LINISTORE, mengunggah
                konten, mengunduh / menggunakan layanan, cookie, dan layanan
                kami. / atau sesi, dengan / tanpa bantuan dari layanan pihak
                ketiga.
                {'\n'}
                {'\n'}
                Kami mengumpulkan informasi yang Anda berikan kepada kami secara
                sukarela. Misalnya, saat Anda mendaftar ke layanan kami; saat
                Anda masuk ke LINISTORE menggunakan layanan pihak ketiga,
                seperti Facebook / Google; saat Anda membeli layanan dan / atau
                domain dari kami; saat Anda mengunggah atau mengirimkan
                informasi pribadi saat Anda menggunakan salah satu layanan kami;
                dan / atau saat Anda menghubungi kami secara langsung.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  MENGAPA KAMI MENGUMPULKAN INFORMASI TERSEBUT?
                </Text>
                {'\n'}
                Kami mengumpulkan informasi pribadi dan non-pribadi tersebut
                untuk tujuan berikut:
                {'\n'}
                1. Untuk menyediakan dan menjalankan layanan terbaik untuk Anda.
                {'\n'}
                2. Untuk lebih mengembangkan, menyesuaikan, dan meningkatkan
                layanan kami, berdasarkan pada preferensi, pengalaman, dan
                kesulitan umum atau pribadi dari Pengguna LINISTORE dan
                Pengunjung.
                {'\n'}
                3. Untuk dapat menghubungi Anda dengan pemberitahuan umum atau
                terkait layanan pribadi.
                {'\n'}
                4. Untuk memfasilitasi dan mensponsori kontes, acara, dan
                promosi tertentu.
                {'\n'}
                5. Untuk membuat data statistik agregat dan informasi agregat
                dan / atau non-pribadi lainnya, yang dapat kami gunakan untuk
                meningkatkan layanan kami.
                {'\n'}
                6. Untuk meningkatkan keamanan data dan kemampuan pencegahan
                penipuan.
                {'\n'}
                7. Untuk mempertimbangkan pencalonan pelamar kerja untuk bekerja
                di LINISTORE.
                {'\n'}
                8. Untuk mematuhi hukum dan peraturan yang berlaku.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  LOKASI PENYIMPANAN INFORMASI
                </Text>
                {'\n'}
                Semua informasi pribadi dan non-pribadi Anda dapat disimpan,
                diproses, dan disimpan oleh LINISTORE dan penyedia layanan resmi
                kami di Indonesia. Informasi pelamar kerja akan disimpan,
                diproses, dan disimpan oleh LINISTORE di Indonesia. LINISTORE
                dan penyedia layanan resmi kami berkomitmen untuk menyimpan dan
                memproses semua informasi Anda dengan aman dan sesuai dengan
                standar industri.
                {'\n'}
                {'\n'}
                Jika Anda tinggal di negara yang memberlakukan kewajiban
                "pelokalan data" atau "tempat tinggal data" (yaitu mewajibkan
                informasi pribadi dari tempat tinggalnya disimpan dalam batas
                teritorial yurisdiksi tersebut), maka kami dapat menyimpan
                informasi pribadi Anda dalam batas teritorial tersebut, jika
                kami diwajibkan secara hukum untuk melakukannya.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  BERBAGI INFORMASI DENGAN PIHAK KETIGA
                </Text>
                {'\n'}
                LINISTORE dapat membagikan atau memberikan akses ke informasi
                pribadi Anda dengan pihak ketiga hanya dengan cara berikut:
                {'\n'}
                LINISTORE telah bermitra dengan sejumlah penyedia layanan
                terpilih, yang layanannya melengkapi, memfasilitasi, dan
                meningkatkan layanan kami sendiri. Ini termasuk, tetapi tidak
                terbatas pada: hosting, lokasi bersama server, jaringan
                pengiriman konten, layanan keamanan data dan dunia maya, layanan
                pemrosesan penagihan dan pembayaran, pendaftar nama domain,
                layanan pencegahan dan deteksi penipuan, analitik web,
                distribusi email dan layanan pemantauan, penyedia konten, dan
                penasihat hukum dan keuangan kami (secara kolektif, "Layanan
                Pihak Ketiga"). Semua Layanan Pihak Ketiga dapat menerima atau
                memiliki akses ke informasi pribadi tergantung pada
                masing-masing peran dan tujuan khusus mereka dalam memfasilitasi
                dan meningkatkan layanan dan bisnis kami, dan hanya dapat
                menggunakannya untuk tujuan tersebut. Perhatikan bahwa meskipun
                layanan kami mungkin berisi tautan ke situs web / layanan lain,
                kami tidak bertanggung jawab atas praktik privasi situs web atau
                layanan tersebut, dan mendorong Anda untuk waspada ketika Anda
                meninggalkan layanan kami dan membaca pernyataan privasi
                masing-masing dan setiap situs web dan layanan yang Anda
                kunjungi. Kebijakan privasi ini tidak berlaku untuk situs web
                dan layanan pihak ketiga yang ditautkan tersebut.
                {'\n'}
                {'\n'}
                LINISTORE dapat mengungkapkan atau mengizinkan akses lain ke
                informasi pribadi Anda sesuai dengan permintaan hukum, termasuk,
                namun tidak terbatas pada, panggilan pengadilan, proses hukum,
                surat perintah penggeledahan, perintah pengadilan, atau sesuai
                dengan hukum yang berlaku, jika kami memiliki keyakinan yang
                baik bahwa hukum mengharuskan kami untuk melakukannya, dengan
                atau tanpa pemberitahuan kepada Anda. LINISTORE dapat memberikan
                informasi pribadi Anda dengan orang lain jika kami yakin bahwa
                ini akan membantu melindungi hak, properti, atau keamanan
                Pengguna LINISTORE / Pengunjung / masyarakat umum, dengan atau
                tanpa pemberitahuan kepada Anda.
                {'\n'}
                {'\n'}
                Layanan kami mencakup fitur dan widget media sosial tertentu,
                termasuk, namun tidak terbatas pada, "login Facebook", "login
                Google+", "Suka Facebook", atau "Tombol Berbagi Media Sosial"
                ("Fitur Media Sosial"). Fitur media sosial ini dapat
                mengumpulkan informasi, seperti alamat IP Anda, halaman mana
                yang Anda kunjungi di situs web kami, dan dapat mengatur cookie
                agar dapat berfungsi dengan baik. Fitur media sosial di hosting
                oleh pihak ketiga atau di hosting langsung ke layanan kami,
                tetapi interaksi Anda dengan fitur media sosial ini diatur oleh
                kebijakan mereka dan bukan oleh kami. Selain itu, layanan kami
                memungkinkan Anda untuk memberikan informasi pribadi Anda secara
                langsung kepada pihak ketiga, seperti melalui teknik
                pembingkaian halaman untuk menyajikan konten ke / dari Layanan
                Pihak Ketiga, sambil mempertahankan tampilan dan nuansa situs
                web dan layanan kami. Informasi pribadi melalui bingkai
                tersebut, Anda sebenarnya memberikan kepada pihak ketiga dan
                bukan kepada kami, dan interaksi serta berbagi informasi
                tersebut diatur oleh kebijakan pihak ketiga tersebut dan bukan
                kebijakan kami.
                {'\n'}
                {'\n'}
                Kami dapat memberikan informasi pribadi atau non-pribadi Anda
                secara internal dengan keluarga perusahaan kami, untuk tujuan
                yang dijelaskan dalam kebijakan privasi ini, seperti: memberi
                Anda layanan kami dari server lain atau LINISTORE sedang
                mengalami perubahan dalam kendali, termasuk melalui merger,
                akuisisi atau pembelian secara substansial seluruh asetnya. Jika
                kami yakin bahwa perubahan kontrol tersebut dapat mempengaruhi
                informasi pribadi Anda secara material, kami akan memberitahu
                Anda melalui saluran berita kami (email / media sosial).
                {'\n'}
                {'\n'}
                Untuk menghindari keraguan, LINISTORE dapat memberikan informasi
                pribadi Anda dengan cara selain yang dijelaskan di atas, sesuai
                dengan persetujuan eksplisit Anda, atau jika kami berkewajiban
                secara hukum untuk melakukannya. Selain itu, LINISTORE dapat
                mentransfer, membagikan, mengungkapkan, atau menggunakan
                informasi non-pribadi atas kebijakannya sendiri dan tanpa perlu
                persetujuan lebih lanjut.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  PENGGUNAAN COOKIES DAN TEKNOLOGI PELACAKAN
                </Text>
                {'\n'}
                LINISTORE, dengan mitra pemasaran / analitik / teknologinya,
                menggunakan teknologi pemantauan dan pelacakan tertentu,
                termasuk, namun tidak terbatas pada, cookie, suar, piksel, tag,
                dan skrip. Teknologi ini digunakan untuk memelihara,
                menyediakan, dan meningkatkan layanan kami secara berkelanjutan,
                dan untuk memberikan pengalaman yang lebih baik kepada
                Pengunjung dan Pengguna LINISTORE kami. Harap dicatat bahwa
                Layanan Pihak Ketiga yang menempatkan cookie atau memanfaatkan
                teknologi pelacakan lain melalui layanan kami mungkin memiliki
                kebijakan mereka sendiri mengenai bagaimana mereka mengumpulkan
                dan menyimpan informasi. Praktik semacam itu tidak tercakup
                dalam kebijakan privasi kami dan kami tidak memiliki kendali
                atas mereka.
                {'\n'}
                {'\n'}
                Cookie: Agar beberapa teknologi ini berfungsi dengan baik, file
                data kecil ("cookie" harus diunduh dan disimpan di perangkat
                Anda. Secara default, kami menggunakan beberapa cookie tetap
                untuk tujuan sesi dan otentikasi pengguna, keamanan, menjaga
                preferensi pengguna (misalnya mengenai bahasa default),
                stabilitas koneksi, memantau kinerja layanan kami dan kampanye
                pemasaran, dan secara umum menyediakan dan meningkatkan layanan
                kami.)
                {'\n'}
                {'\n'}
                Pemasaran Ulang / Penargetan Ulang: Layanan Pihak Ketiga dan
                jaringan iklan tertentu mungkin menampilkan iklan LINISTORE di
                situs web lain. Pihak tersebut menggunakan teknologi pelacakan
                tertentu untuk mengumpulkan informasi tertentu tentang aktivitas
                Anda di layanan dan situs web pihak ketiga yang berbeda untuk
                memberi Anda iklan bertarget berdasarkan minat dan preferensi
                Anda.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>KEAMANAN</Text>
                {'\n'}
                LINISTORE telah menerapkan langkah-langkah keamanan untuk
                melindungi informasi pribadi Anda, termasuk tindakan fisik,
                elektronik, dan prosedural. Antara lain, kami menyediakan akses
                aman HTTPS ke semua area di layanan kami, kecuali situs web
                pengguna kami. Namun, situs web pengguna dapat diakses melalui
                HTTPS setelah berlangganan langganan premium kami. Transmisi
                informasi sensitif (seperti kartu kredit / informasi pembayaran)
                melalui situs kami dilindungi oleh koneksi terenkripsi SSL / TLS
                standar industri. Kami juga secara teratur menjaga sistem kami
                dari serangan atau eksploitasi.
                {'\n'}
                {'\n'}
                Namun, terlepas dari tindakan dan upaya yang kami lakukan untuk
                menjaga keamanan data Anda, kami tidak dapat dan tidak menjamin
                perlindungan mutlak dan keamanan informasi Anda. Oleh karena
                itu, kami mendorong Anda untuk menetapkan kata sandi yang kuat
                untuk akun pengguna dan situs web, dan menghindari memberi kami
                informasi sensitif apa pun yang menurut Anda pengungkapannya
                dapat menyebabkan kerugian yang substansial atau tidak dapat
                diperbaiki. Area tertentu dalam layanan kami kurang aman
                (misalnya, area yang tidak menggunakan HTTPS sebagai
                protokolnya), jadi sebaiknya Anda tidak memberikan informasi
                pribadi apa pun di area ini. Jika Anda memiliki pertanyaan
                tentang sekuritas kami, silahkan email kami di
                corporate@LINISTORE.com.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>JAMINAN</Text>
                {'\n'}
                Anda menggunakan situs ini dan/atau aplikasi di dalamnya atas
                resiko eksklusif anda sendiri. Informasi, materi piranti lunak,
                program, produk dan jasa yang terdapat pada situs ini, termasuk
                tulisan, gambar-gambar, tautan atau hal-hal lainnya ditetapkan
                "sebagaimana adanya", "sebagaimana tersedia" tanpa ada jaminan
                apapun. LINISTORE tidak memberikan jaminan bahwa situs ini tidak
                akan terganggu, tepat waktu, aman atau terbebas dari virus
                computer dan kekeliruan.
                {'\n'}
                {'\n'}
                Anda memahami dan menyetujui bahwa jika anda mengunduh atau
                mendapatkan materi, informasi, produk, piranti lunak, program,
                atau jasa, maka hal itu dilakukan oleh anda atas keputusan dan
                resiko anda sendiri dan anda sendiri yang akan bertanggung jawab
                atas kerusakan yang mungkin terjadi, termasuk kehilangan data
                atau kerusakan pada sistem komputer anda.
                {'\n'}
                {'\n'}
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  HUKUM YANG BERLAKU
                </Text>
                {'\n'}
                Penggunaan situs ini tunduk pada ketentuan hukum dan peraturan
                perundangan Republik Indonesia.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AppModalPrivacy;
