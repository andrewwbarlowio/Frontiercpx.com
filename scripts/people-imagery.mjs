// Approved contextual AI illustrations; these do not depict Frontier personnel or clients.
const scenes = {
  home: ['manufacturing-discussion', 'A manufacturing owner and adviser review a production plan on the factory floor'],
  about: ['owner-conversation', 'A business owner explains her plans while two advisers listen around a table'],
  approach: ['planning-next-steps', 'An adviser and business owner work through a timeline and agree next steps'],
  expertise: ['testing-assumptions', 'Two people examine a production plan and question its assumptions'],
  advisers: ['adviser-collaboration', 'An adviser, business owner and specialist discuss a shared requirement']
};
export function peopleImage(key) {
  const [file, alt] = scenes[key];
  return `<figure class="context-photo"><img src="/assets/images/people/${file}-1536.webp" srcset="/assets/images/people/${file}-768.webp 768w, /assets/images/people/${file}-1536.webp 1536w" sizes="(max-width: 850px) calc(100vw - 48px), (max-width: 1336px) 44vw, 580px" alt="${alt}" width="1536" height="1024" loading="lazy" decoding="async"><figcaption>AI-generated illustration.</figcaption></figure>`;
}
