import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = (props: ToasterProps) => (
  <Sonner
    position="top-center"
    closeButton
    toastOptions={{
      style: {
        fontFamily: 'Public Sans, ui-sans-serif, system-ui, sans-serif',
        background: '#fff',
        color: '#333',
        border: '3px solid #333',
        borderRadius: '12px',
        boxShadow: '0 6px 0 0 #333',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '16px',
        paddingRight: '44px',
      },
      actionButtonStyle: {
        fontFamily: 'Public Sans, ui-sans-serif, system-ui, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        background: '#9900ff',
        color: '#fff',
        borderRadius: '8px',
        padding: '6px 14px',
        height: 'auto',
        border: 'none',
        cursor: 'pointer',
      },
      cancelButtonStyle: {
        fontFamily: 'Public Sans, ui-sans-serif, system-ui, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        background: 'transparent',
        color: '#666',
        borderRadius: '8px',
        padding: '5px 14px',
        height: 'auto',
        border: '2px solid rgba(51,51,51,0.25)',
        cursor: 'pointer',
      },
    }}
    {...props}
  />
)
Toaster.displayName = 'Toaster'

export { Toaster }
