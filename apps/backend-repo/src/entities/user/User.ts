export interface User {
  uid: string;
  email: string;
  displayName: string;
  createdAt: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}
