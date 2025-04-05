export class User {
  uid: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: FirebaseFirestore.DocumentData) {
    this.uid = data.uid;
    this.name = data.name || '';
    this.email = data.email || '';
    this.createdAt = data.createdAt?.toDate?.() || new Date();
    this.updatedAt = data.updatedAt?.toDate?.() || null;
  }
}
