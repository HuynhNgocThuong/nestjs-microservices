nest generate library common
nest generate database -p common
nest generate config -p common

nest generate app reservations
nest generate resource reservations
