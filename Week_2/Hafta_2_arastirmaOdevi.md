# Araştırma Ödevleri

**Mongoose her kayıt için nasıl id oluşturuyor?**

ID alanı, veritabanı sunucusunda birincil alanı oluşturma işlevine sahip bazı veritabanlarının aksine, istemci tarafında oluşturulur.Mongoose'un MongoDB yerel sürücüsü tarafından sağlanan ObjectId işlevini çağırmasıdır. Bu, sunucu olmadan yapılır, yani sunucu bağlantısı olmadan bir ObjectId oluşturabilir.

```
/* herhangi bir veritabanı bağlantısı yok */
const TestSchema = new mongoose.Schema() // boş şema, yalnızca _id alanı içermelidir

const Test = mongoose.model('Test', TestSchema)
const test = new Test()

console.log(test.toString()) // bu, _id alanı olan bir nesneyi günlüğe kaydeder

```

**Geospatial Indexing  nedir?  (**[https://www.arangodb.com/docs/stable/indexing-geo.html](https://www.arangodb.com/docs/stable/indexing-geo.html)**)**

Jeo-uzamsal dizin, çeşitli geometrik 2B şekiller için kapsama ve kesişim sorgularını destekler. Bu tür işlemleri gerçekleştirmek için esas olarak AQL sorgularını kullanıyor olmalısınız. Endeks, GeoJSON veri formatını kullanmak isteyip istemediğinize bağlı olarak iki farklı modda çalışabilir. Modlar, esas olarak, dizin oluşturulurken geoJson alanı kullanılarak değiştirilir.

Bu indeks -90 ile 90 derece arasındaki enlem ve -180 ile 180 derece arasındaki boylam ile koordinatları varsayar. Bir coğrafi dizin, bu gereksinimleri karşılamayan tüm belgeleri yok sayar.

**Mongoose yerine başka ne kullanılabilir?**

MongoDB, belge odaklı bir veritabanı modeli kullanan açık kaynaklı bir NoSQL DBMS'dir. Çeşitli veri biçimlerini destekler. Ancak, MongoDB'de denormalizasyon nedeniyle veri tüketimi yüksektir. En İyi 9 MongoDB alternatifi. 

Kaynak: [https://www.guru99.com/mongodb-alternative.html](https://www.guru99.com/mongodb-alternative.html)

1. RethinkDB
2. OrientDB
3. CouchDB
4. Arangodb
5. PostgreSQL
6. Apache Cassandra
7. IBM Cloudant
8. DynamoDB
9. CockroachDB