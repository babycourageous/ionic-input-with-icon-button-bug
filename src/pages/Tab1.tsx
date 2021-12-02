import * as React from 'react'
import {
  IonContent,
  IonButton,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/react'

import { eyeOffOutline, eyeOutline } from 'ionicons/icons'

function Login() {
  const [loginForm, setLoginForm] = React.useState({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = React.useState(false)

  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.currentTarget)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h2 style={{ fontSize: '20px' }}>Login</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid style={{ height: '100%' }}>
          <IonRow
            style={{ height: '100%' }}
            className="ion-justify-content-center ion-align-items-center"
          >
            <IonCol size="12" className="ion-text-center">
              <IonCard color="secondary">
                <IonCardContent>
                  <form onSubmit={handleLoginSubmit}>
                    <IonItem color="secondary">
                      <IonLabel position="stacked">Username </IonLabel>
                      <IonInput
                        name="username"
                        type="email"
                        value={loginForm.username}
                        onIonChange={(e) =>
                          setLoginForm((state) => ({
                            ...state,
                            username: e.detail.value!,
                          }))
                        }
                        autocapitalize="off"
                        required
                      />
                    </IonItem>

                    <IonItem color="secondary" style={{ flexGrow: 1 }}>
                      <IonLabel position="stacked">Password </IonLabel>
                      <IonInput
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={loginForm.password}
                        onIonChange={(e) =>
                          setLoginForm((state) => ({
                            ...state,
                            password: e.detail.value!,
                          }))
                        }
                        required
                      />
                      <IonButton
                        fill="clear"
                        color="primary"
                        onClick={() =>
                          setShowPassword((currentState) => !currentState)
                        }
                        slot="end"
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={showPassword ? eyeOffOutline : eyeOutline}
                        />
                      </IonButton>
                    </IonItem>
                    <IonButton type="submit">Login</IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login
