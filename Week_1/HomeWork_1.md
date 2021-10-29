# Odev_1

**Soru: Bir dosyayı okumak için readFile fonksiyonunu çalıştırdım fakat bir durumda okuma işlemine gerek kalmadı bu yüzden işlemi iptal etmek istiyorum. Programın devamında dosya okuma işlemini nasıl iptal edebilirim?**

- fs.readFile ile bir dosyayı asenkron olarak okuyabiliriz ancak dosyanın tamamı okunana kadar callback fonksiyonları başlatılamaz.
- Bunun yerine stream.Readable veren fs.createReadStream() kullanmak gerekir. Ardından bu nesne için uygun olayları uygulayabiliriz.

**Soru: readFile fonksiyonu dosyayı bütün halinde okuyup memory’ye alır. Programın daha az memory kullanmasını sağlamak için alternatif olarak neler kullanılabilir?**

- Daha az bellek tüketimi öncelikle için daha iyi algoritmalar oluşturulabilir.
- Ayrıca "**–max-old-space-size" , "–max-new-space-size" , "-max-semi-space-size"** kullanılabilir.