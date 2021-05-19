# cc_api

API de circulo de credito

# Comandos

## Crear usuario

\$ python manage.py create_user -u juan -e juan@gmail.com -p 123456789 -r admin

opción r es rol y puede ser admin u omitirse

## Productos de círculo de crédito

\$ python manage.py common_products

# Ejecución

## Ambiente local

\$ python -menv env
\$ source env/bin/activate
\$ pip install -r requirements.txt
\$ python manage.py migrate
\$ python manage.py runserver

# Playground de graphql

http://localhost:8000/graphql/user

