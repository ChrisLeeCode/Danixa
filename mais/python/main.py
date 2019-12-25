import json

f = open("maisietexts.txt", "r", encoding="utf8")
text = f.read()

text_list = text.split("\n")
txt_dict = {}

#[1] is which list is active (can be 1 or 2)
msgs_list = [[1],[],[]]

days = 0
msg_count = 0
curr_date = ""
for msg in text_list:
	if len(msg) == 0:
		break
	msg_trimmed = msg.split("\t")
	del msg_trimmed[3]
	del msg_trimmed[3]
	new_date = msg_trimmed[0]
	if new_date == curr_date:
		#append messages to current day (list)
		msgs_list[1][-1].append(msg_trimmed)
		msg_count += 1
	else:
		#change current date to this new date
		curr_date = new_date
		days += 1
		#create a new day (list) and add message to it
		msgs_list[1].append([msg_trimmed])
		msg_count += 1

	
	

print(days, "days.","total of",msg_count,"messages")
print()
print("Saving...")
	
with open('data.json', 'w') as fp:
    json.dump(msgs_list, fp)