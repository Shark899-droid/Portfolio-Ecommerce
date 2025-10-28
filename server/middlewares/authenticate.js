import jwt from 'jsonwebtoken'
export const authenticate = (req, res, next) => {
  // 1. Ottieni l'header di autorizzazione
  const authHeader = req.headers.authorization

  // Il formato è "Bearer TOKEN_STRING"
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    // 401 Unauthorized - Non è stato fornito alcun token
    return res.status(401).json({ message: 'Token non fornito.' })
  }

  // 2. Verifica il token
  try {
    // Assicurati di usare la stessa chiave segreta usata per firmare il token
    // È FONDAMENTALE usare le variabili d'ambiente (process.env) per questo
    const privateKey = process.env.JWT_SECRET 

    // 'decodedToken' conterrà il payload che hai inserito alla firma
    // (es: { id: 1, username: 'test' })
    const decodedToken = jwt.verify(token, privateKey)

    // 3. Allega i dati dell'utente alla richiesta
    // Ora, qualsiasi rotta successiva può accedere a req.user
    req.user = decodedToken

    // 4. Passa al prossimo middleware o alla rotta
    next()
  } catch (err) {
    // 403 Forbidden - Il token non è valido (es. scaduto o firma errata)
    return res.status(403).json({ message: 'Token non valido o scaduto.' })
  }
}
