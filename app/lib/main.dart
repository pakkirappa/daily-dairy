import 'package:flutter/material.dart';
import 'package:notebook/notebooks.dart';

void main() {
  runApp(MaterialApp(
    debugShowMaterialGrid: false,
    home: Login(),
  ));
}

class Login extends StatelessWidget {
  Login({Key? key}) : super(key: key);

  final TextEditingController username = TextEditingController();
  final TextEditingController password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            "Login",
            style: TextStyle(
                fontSize: 50,
                color: Colors.red.shade500,
                fontFamily: "YourFontFamily",
                fontWeight: FontWeight.w800),
          ),
          Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                children: [
                  TextFormField(
                    controller: username,
                    decoration: InputDecoration(hintText: "UserName"),
                  ),
                  TextFormField(
                    controller: password,
                    obscureText: true,
                    decoration: InputDecoration(hintText: "Password"),
                  )
                ],
              )),
          ElevatedButton(
              onPressed: () {
                String usernamevalue = username.text;
                String passwordvalue = password.text;
                if (usernamevalue.isNotEmpty && passwordvalue.isNotEmpty) {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => Notebook()));
                } else {
                  showDialog(
                      context: context,
                      builder: (context) => const AlertDialog(
                            title: Text("Error"),
                            content: Text("Enter Valcid details"),
                          ));
                }
              },
              child: Text("Submit"))
        ],
      )),
    );
  }
}
