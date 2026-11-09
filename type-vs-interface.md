Type Alias vs Interface in TypeScript
Introduction
TypeScript-এ type alias এবং interface---দুটোই ব্যবহার করে আমরা কোনো
data বা object-এর structure নির্ধারণ করতে পারি। শুরুতে দুটোকে প্রায় একই মনে
হলেও কিছু গুরুত্বপূর্ণ পার্থক্য আছে। কোন জায়গায় কোনটি ব্যবহার করব, সেটা বুঝলে code
আরও পরিষ্কার ও maintainable হয়।
মূল পার্থক্য
interface মূলত object-এর structure বর্ণনা করার জন্য বেশি পরিচিত। এটি
extends ব্যবহার করে অন্য interface-এর property নিতে পারে। আবার একই নামের
interface একাধিকবার declare করলে TypeScript সেগুলোকে একসঙ্গে merge করে,
যাকে declaration merging বলা হয়।

অন্যদিকে, type alias দিয়ে শুধু object নয়, primitive type, union,
intersection, tuple এবং function type-ও define করা যায়। তবে একই নামে
একাধিক type alias declare করা যায় না।

নিচের উদাহরণটি দেখি:
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: "admin";
}

type Status = "active" | "inactive";

type Account = User & {
  email: string;
};

এখানে Admin interface, User-এর structure inherit করেছে। Status
একটি union type, আর Account-এ User-এর সঙ্গে নতুন property যোগ হয়েছে
intersection দিয়ে।
কখন কোনটি ব্যবহার করব?
আমার মতে, শুধু object-এর structure তৈরি করতে হলে interface ব্যবহার করা
ভালো। আর union, intersection বা একাধিক ধরনের type একসঙ্গে তৈরি করতে হলে
type বেশি সুবিধাজনক। তবে অনেক ক্ষেত্রে দুটো দিয়েই একই কাজ করা যায়।
Conclusion
সব সময় একটিকে অন্যটির চেয়ে ভালো বলা যায় না। কাজের ধরন বুঝে সঠিকটি বেছে
নেওয়াই গুরুত্বপূর্ণ। সবচেয়ে জরুরি হলো code যেন সহজে বোঝা ও maintain করা যায়।