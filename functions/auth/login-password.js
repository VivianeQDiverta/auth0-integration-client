import html from './login-password.html';

export async function onRequestPost() {
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
