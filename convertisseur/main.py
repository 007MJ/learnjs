

def is_money(money):
    try:
        float(money)
        return True
    except:
        return False
def convert(from_money, rate_change=1):
    return from_money * rate_change 

usr_money = input("Enter canadien money to yen :")

yen_rate = 110.49
if (is_money(usr_money)):
    print(round(convert(float(usr_money), yen_rate), 2))
else:
   print("Invalide inpute")