// Visibility (access modifier) digunakan untuk mengatur akses dari properti atau method yang ada didalam sebuah class

// Public
// Protected
// Private

class Hewan7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {
    
  }
}

class Katak7 extends Hewan7 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur(){
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak)
  }
}

const katak7 = new Katak7('ads', 4, false);
