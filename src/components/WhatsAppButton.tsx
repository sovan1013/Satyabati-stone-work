export function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hello SATYABATI STONE WORK, I would like to enquire about your stone aggregate products.',
  );

  return (
    <a
      href={`https://wa.me/919437457722?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span aria-hidden="true">WhatsApp</span>
    </a>
  );
}
