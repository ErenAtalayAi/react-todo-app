# Todo List Uygulaması

Bu proje, React kullanarak basit bir Todo List uygulamasını içerir. Uygulama, kullanıcıların yapılacaklar listesine görev eklemelerine, görevleri düzenlemelerine ve silmelerine olanak tanır. Görevler tarayıcıda saklanır ve sayfa yenilendiğinde korunur.

## Özellikler

- **Görev Ekleme**: Kullanıcılar yeni görevler ekleyebilir.
- **Görev Düzenleme**: Var olan görevleri düzenleyebilirsiniz.
- **Görev Silme**: Görevleri listeye ekledikten sonra silebilirsiniz.
- **Veri Saklama**: Görevler tarayıcıda localStorage kullanılarak saklanır ve sayfa yenilendiğinde korunur.

## Kurulum

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Projeyi Klonlayın**:
    ```bash
    git clone https://github.com/ErenAtalayAi/react-todo-app.git
    ```
2. **Proje Dizini İçine Girin**:
    ```bash
    cd todo-list-uygulamasi
    ```
3. **Bağımlılıkları Yükleyin**:
    ```bash
    npm install
    ```
4. **Uygulamayı Başlatın**:
    ```bash
    npm start
    ```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görebilirsiniz.

## Bileşenler

### `App.js`

Ana uygulama bileşeni, görevlerin listelendiği ve eklenip güncellenebildiği merkezi bileşendir. Görevler `localStorage` kullanılarak saklanır.

### `TodoList.js`

Bu bileşen, görevlerin listesini render eder ve her görev için `TodoItem` bileşenini kullanır.

### `TodoItem.js`

Bu bileşen, tekil görevleri temsil eder. Görevler üzerinde düzenleme, kaydetme, iptal etme ve silme işlemlerini sağlar.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen bir pull request gönderin. Her türlü geri bildirim ve öneri de memnuniyetle karşılanır.