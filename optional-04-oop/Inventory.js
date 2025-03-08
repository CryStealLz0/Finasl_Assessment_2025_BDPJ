import Item from './Item.js';
/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(itemOrId, name, quantity, price) {
    let newItem;

    if (itemOrId instanceof Item) {
      newItem = itemOrId;
    } else {
      newItem = new Item(itemOrId, name, quantity, price);
    }

    const existingItem = this.items.find((item) => item.id == itemOrId);
    if (existingItem) {
      console.log(`Barang dengan ID ${itemOrId} sudah ada di inventory.`);
      return;
    }

    this.items.push(newItem);
    console.log(`Barang ${name} sudah di tambahkan.`);
  }

  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removeItem = this.items.splice(index, 1);
      console.log('Barang dihapus.');
    } else {
      console.log('Barang Tidak ditemukan.');
    }
  }

  listItems() {
    if (this.items.length === 0) {
      return 'Inventory kosong.';
    }
    return this.items.map((item) => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
