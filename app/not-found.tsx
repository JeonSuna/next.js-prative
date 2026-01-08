/*not found 가 보이는 페이지, 파일명이 중요하다 */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};
export default function NotFound() {
  return (
    <div>
      <h1>not found</h1>
    </div>
  );
}
