import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  requestQuote,
  generalInquiry,
} from '../../utils/Whatsapp'

const quickMessages = [
  {
    label: '🧱 Building Materials',
    action: () => requestQuote('Building Materials'),
  },
  {
    label: '🪵 Timber / Mbao',
    action: () => requestQuote('Timber / Mbao'),
  },
  {
    label: '⚡ Electrical Materials',
    action: () => requestQuote('Electrical Materials'),
  },
  {
    label: '🚰 Plumbing Materials',
    action: () => requestQuote('Plumbing Materials'),
  },
  {
    label: '📋 Request a Quote',
    action: () => requestQuote('Hardware Materials'),
  },
  {
    label: '💬 General Inquiry',
    action: () => generalInquiry(),
  },
]

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="position-fixed d-flex flex-column align-items-end"
      style={{
        bottom: '90px',
        right: '25px',
        zIndex: 1050,
        gap: '10px',
      }}
    >
      {/* Quick Message Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            transition={{ duration: 0.3 }}
            className="d-flex flex-column align-items-end gap-2"
          >
            {/* Chat Header */}
            <div
              className="text-white shadow-lg p-3"
              style={{
                backgroundColor: '#075E54',
                borderRadius: '16px',
                borderBottomRightRadius: '4px',
                maxWidth: '300px',
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  }}
                >
                  M
                </div>

                <div>
                  <div className="fw-semibold small">
                    Mshimba Hardware
                  </div>

                  <div
                    className="small"
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    🟢 Online · Replies in 30 min
                  </div>
                </div>
              </div>

              <div className="small text-white">
                Habari! 👋 How can we help you today?
              </div>
            </div>

            {/* Quick Reply Buttons */}
            {quickMessages.map((msg, index) => (
              <motion.button
                key={index}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                type="button"
                onClick={() => {
                  msg.action()
                  setOpen(false)
                }}
                className="btn btn-light shadow-sm border rounded-pill px-3 py-2 small text-nowrap"
                style={{
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366'
                  e.currentTarget.style.borderColor = '#25D366'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.borderColor = '#dee2e6'
                  e.currentTarget.style.color = '#212529'
                }}
              >
                {msg.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={
          open
            ? 'Close WhatsApp menu'
            : 'Open Mshimba Hardware WhatsApp'
        }
        className="border-0 rounded-circle d-flex align-items-center justify-content-center position-relative shadow-lg"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.35)',
          cursor: 'pointer',
        }}
      >
        {/* Ping Animation */}
        {!open && (
          <>
            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
              style={{
                backgroundColor: '#25D366',
                opacity: 0.25,
                animation: 'whatsappPing 1.8s infinite',
              }}
            />

            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
              style={{
                backgroundColor: '#25D366',
                opacity: 0.15,
                animation: 'whatsappPing 1.8s infinite 0.5s',
              }}
            />
          </>
        )}

        {/* Icon */}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{
                rotate: -90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: 90,
                opacity: 0,
              }}
              transition={{ duration: 0.2 }}
              className="position-relative"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M6 6L18 18"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{
                rotate: 90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: -90,
                opacity: 0,
              }}
              transition={{ duration: 0.2 }}
              className="position-relative"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="#fff"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
