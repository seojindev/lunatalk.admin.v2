import instance from '../axios'

export function setlogin({
  login_id,
  login_password
}: {
  login_id: string
  login_password: string
}) {
  return instance.post('/api/admin-front/v1/auth/login', { login_id, login_password })
}
