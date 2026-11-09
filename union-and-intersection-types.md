Combining Union and Intersection Types in TypeScript
Introduction
TypeScript-এ Union (|) এবং Intersection (&) খুবই দরকারি দুটি feature।
Union দিয়ে একাধিক type-এর মধ্যে যেকোনো একটি গ্রহণ করা যায়। আর Intersection
দিয়ে একাধিক type-এর property একসঙ্গে যুক্ত করে নতুন type তৈরি করা যায়।
Union এবং Intersection-এর ব্যবহার
ধরি, আমাদের একটি application-এ user দুই ধরনের হতে পারে---সাধারণ user অথবা
admin। এখানে Union ব্যবহার করা যায়। আবার প্রত্যেক user-এর common
information-এর সঙ্গে অতিরিক্ত কিছু property যোগ করতে Intersection ব্যবহার
করা যায়।

নিচের উদাহরণটি দেখলে বিষয়টি পরিষ্কার হবে:
type User = {
  name: string;
  email: string;
};

type Admin = {
  role: "admin";
  permissions: string[];
};

type Customer = {
  role: "customer";
  purchaseCount: number;
};

// Intersection: দুই type-এর property একসঙ্গে যুক্ত হবে
type AdminUser = User & Admin;
type CustomerUser = User & Customer;

// Union: AdminUser অথবা CustomerUser—যেকোনো একটি হতে পারে
type AppUser = AdminUser | CustomerUser;

const currentUser: AppUser = {
  name: "Alamin",
  email: "alamin@example.com",
  role: "admin",
  permissions: ["add", "delete"],
};

এখানে AdminUser তৈরি হয়েছে User এবং Admin-এর property একসঙ্গে যুক্ত
করে। একইভাবে CustomerUser-এ User ও Customer-এর property যুক্ত হয়েছে।
এরপর AppUser-এ Union ব্যবহার করায় variable-টি admin অথবা customer---দুই
ধরনের যেকোনো একটি structure গ্রহণ করতে পারবে।
Conclusion
সহজভাবে বললে, Union মানে একাধিক type-এর মধ্যে যেকোনো একটি, আর
Intersection মানে একাধিক type একসঙ্গে। বাস্তব project-এ user role, API
response এবং বিভিন্ন data structure handle করতে এই দুটি feature অনেক কাজে
আসে।