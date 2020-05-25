export class Utils {
  public getRandomId() {
    const min = Math.ceil(10000);
    const max = Math.floor(99999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getSchoolName(schoolOption) {
    switch (schoolOption) {
      case 'schoolTallinn':
        return 'International school of Tallinn';
      case 'schoolTartu':
        return 'International school of Tartu';
      case 'schoolViljandi':
        return 'International school of Viljandi';
    }
  }
}
